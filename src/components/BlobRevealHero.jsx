import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BLOB_MASK_VERT = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`

const BLOB_MASK_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D fbTexture;
uniform vec2 pointer;
uniform float pointerDown;
uniform float pointerRadius;
uniform float pointerDuration;
uniform float pointerAddStrength;
uniform float dTime;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * smoothNoise(p);
        p *= 2.02;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = vUv;
    float rVal = texture2D(fbTexture, uv).r;

    rVal -= clamp(dTime / pointerDuration, 0.0, 0.05);

    float dist = distance(uv, pointer);
    float angle = atan(uv.y - pointer.y, uv.x - pointer.x);
    float organicRadius = pointerRadius
        + fbm(uv * 6.0 + angle) * 0.04
        + fbm(uv * 12.0 - angle) * 0.02;

    float f = smoothstep(organicRadius * 0.05, organicRadius * 1.2, dist);
    rVal += f * pointerAddStrength * pointerDown;
    rVal = clamp(rVal, 0.0, 1.0);

    gl_FragColor = vec4(vec3(rVal), 1.0);
}
`

const PLANE_VERT = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`

const NOISE_FRAG = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec3 color;
uniform sampler2D blobTexture;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p *= 2.02;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = vUv;
    float blob = texture2D(blobTexture, uv).r;
    if (blob < 0.02) discard;

    float n = fbm(uv * 2.0 + time * 0.2);
    float warp = fbm(uv * 3.5 + n);
    float lines = fract(warp * 15.0);
    lines = smoothstep(0.3, 0.7, lines);

    vec3 col = color * (0.6 + 0.4 * lines) * (0.5 + 0.5 * n);
    col *= blob;

    gl_FragColor = vec4(col, 1.0);
}
`

const REVEAL_FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D map;
uniform sampler2D blobTexture;

void main() {
    float blob = texture2D(blobTexture, vUv).r;
    if (blob < 0.02) discard;
    vec4 tex = texture2D(map, vUv);
    gl_FragColor = vec4(tex.rgb, tex.a);
}
`

function coverScale(meshAspect, containerAspect) {
    const a = meshAspect / containerAspect
    return a > 1 ? a : 1
}

function BlobRevealHero({
    baseImage,
    revealImage,
    bgColor = '#1a1f1a',
    blobTintColor = [1.0, 1.0, 1.0],
    pointerRadius = 0.35,
    pointerDuration = 2.5,
    pointerAddStrength = 0.25,
    className = '',
    style = {},
    showOverlay = true,
    children = null,
}) {
    const containerRef = useRef(null)
    const timeRef = useRef(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container || !baseImage || !revealImage) return

        let renderer, camera, scene, clock, rafId
        let blobMesh, blobMaterial, rtA, rtB, noiseMesh, revealMesh
        let canvas

        const rendererInit = () => {
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            renderer.setSize(container.clientWidth, container.clientHeight)
            canvas = renderer.domElement
            canvas.style.position = 'absolute'
            canvas.style.inset = '0'
            canvas.style.width = '100%'
            canvas.style.height = '100%'
            canvas.style.display = 'block'
            container.appendChild(canvas)
        }

        const sceneInit = () => {
            scene = new THREE.Scene()
            scene.background = new THREE.Color(bgColor)
            camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10)
            camera.position.z = 1
        }

        const blobInit = () => {
            const rtSpec = {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
            }
            rtA = new THREE.WebGLRenderTarget(
                container.clientWidth,
                container.clientHeight,
                rtSpec
            )
            rtB = new THREE.WebGLRenderTarget(
                container.clientWidth,
                container.clientHeight,
                rtSpec
            )
            blobMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    fbTexture: { value: rtA.texture },
                    pointer: { value: new THREE.Vector2(0.5, 0.5) },
                    pointerDown: { value: 0.0 },
                    pointerRadius: { value: pointerRadius },
                    pointerDuration: { value: pointerDuration },
                    pointerAddStrength: { value: pointerAddStrength },
                    dTime: { value: 0.0 },
                },
                vertexShader: BLOB_MASK_VERT,
                fragmentShader: BLOB_MASK_FRAG,
                depthTest: false,
                depthWrite: false,
            })
            blobMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blobMaterial)
            blobMesh.frustumCulled = false
        }

        const loadAspectMesh = (url, z, makeMaterial, setMesh) => {
            return new Promise((resolve) => {
                new THREE.TextureLoader().load(url, (texture) => {
                    texture.minFilter = THREE.LinearFilter
                    texture.magFilter = THREE.LinearFilter
                    const material = makeMaterial(texture)
                    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
                    mesh.frustumCulled = false
                    mesh.position.z = z
                    mesh.userData.aspect = texture.image.width / texture.image.height
                    scene.add(mesh)
                    setMesh(mesh)
                    resolve(mesh)
                })
            })
        }

        const baseInit = () =>
            loadAspectMesh(
                baseImage,
                0,
                (texture) => new THREE.MeshBasicMaterial({ map: texture }),
                () => {}
            )

        const noiseInit = () => {
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0.0 },
                    color: { value: new THREE.Vector3(...blobTintColor) },
                    blobTexture: { value: null },
                },
                vertexShader: PLANE_VERT,
                fragmentShader: NOISE_FRAG,
                transparent: true,
                depthTest: false,
                depthWrite: false,
            })
            const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
            mesh.frustumCulled = false
            mesh.position.z = 0.05
            scene.add(mesh)
            noiseMesh = mesh
            return mesh
        }

        const revealInit = () =>
            loadAspectMesh(
                revealImage,
                0.1,
                (texture) =>
                    new THREE.ShaderMaterial({
                        uniforms: {
                            map: { value: texture },
                            blobTexture: { value: null },
                        },
                        vertexShader: PLANE_VERT,
                        fragmentShader: REVEAL_FRAG,
                        transparent: true,
                        depthTest: false,
                        depthWrite: false,
                    }),
                (mesh) => { revealMesh = mesh }
            )

        const resize = () => {
            const w = container.clientWidth
            const h = container.clientHeight
            if (!w || !h) return
            renderer.setSize(w, h)
            rtA.setSize(w, h)
            rtB.setSize(w, h)
            const containerAspect = w / h
            scene.children.forEach((mesh) => {
                if (mesh.userData.aspect) {
                    const s = coverScale(mesh.userData.aspect, containerAspect)
                    mesh.scale.set(s, s, 1)
                }
            })
        }

        const updatePointer = (clientX, clientY) => {
            const rect = container.getBoundingClientRect()
            const x = (clientX - rect.left) / rect.width
            const y = 1.0 - (clientY - rect.top) / rect.height
            blobMaterial.uniforms.pointer.value.set(x, y)
            blobMaterial.uniforms.pointerDown.value = 1.0
        }
        const clearPointer = () => {
            blobMaterial.uniforms.pointerDown.value = 0.0
        }

        const onMouseMove = (e) => updatePointer(e.clientX, e.clientY)
        const onMouseLeave = () => clearPointer()
        const onTouchMove = (e) => {
            e.preventDefault()
            if (e.touches && e.touches.length > 0) {
                updatePointer(e.touches[0].clientX, e.touches[0].clientY)
            }
        }
        const onTouchEnd = () => clearPointer()

        const init = async () => {
            rendererInit()
            sceneInit()
            blobInit()
            await Promise.all([baseInit(), noiseInit(), revealInit()])

            noiseMesh.material.uniforms.blobTexture.value = rtA.texture
            revealMesh.material.uniforms.blobTexture.value = rtA.texture
            blobMaterial.uniforms.fbTexture.value = rtA.texture

            clock = new THREE.Timer()
            resize()

            container.addEventListener('mousemove', onMouseMove)
            container.addEventListener('mouseleave', onMouseLeave)
            container.addEventListener('touchmove', onTouchMove, { passive: false })
            container.addEventListener('touchend', onTouchEnd)

            const animate = () => {
                rafId = requestAnimationFrame(animate)
                clock.update()
                const delta = clock.getDelta()
                timeRef.current += delta
                blobMaterial.uniforms.dTime.value = delta

                renderer.setRenderTarget(rtB)
                renderer.render(blobMesh, camera)
                renderer.setRenderTarget(null)

                noiseMesh.material.uniforms.blobTexture.value = rtB.texture
                revealMesh.material.uniforms.blobTexture.value = rtB.texture

                ;[rtA, rtB] = [rtB, rtA]
                blobMaterial.uniforms.fbTexture.value = rtA.texture

                noiseMesh.material.uniforms.time.value = timeRef.current
                renderer.render(scene, camera)
            }

            animate()
        }

        init()

        const onResize = () => resize()
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
            container.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('mouseleave', onMouseLeave)
            container.removeEventListener('touchmove', onTouchMove)
            container.removeEventListener('touchend', onTouchEnd)
            cancelAnimationFrame(rafId)
            if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas)
            if (scene) {
                scene.traverse((obj) => {
                    if (obj.geometry) obj.geometry.dispose()
                    if (obj.material) {
                        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
                        else obj.material.dispose()
                    }
                })
            }
            if (rtA) rtA.dispose()
            if (rtB) rtB.dispose()
            if (renderer) renderer.dispose()
        }
    }, [baseImage, revealImage, bgColor, blobTintColor, pointerRadius, pointerDuration, pointerAddStrength])

    return (
        <div
            ref={containerRef}
            className={className}
            style={{ position: 'absolute', inset: 0, overflow: 'hidden', ...style }}
        >
            {showOverlay && (
                <div className="pointer-events-none absolute inset-0 z-10">{children}</div>
            )}
        </div>
    )
}

export default BlobRevealHero
