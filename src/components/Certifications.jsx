function Certifications() {
    const certifications = [
        {
            name: "AWS Educate - Getting Started with Compute",
            issuer: "AWS",
            issueDate: "Oct 2026",
            id: null,
            verifyUrl: "https://www.credly.com/badges/87b32e32-15ef-424b-ab67-5b506634310e/public_url",
            pdfPath: "/assets/certs/aws-educate-getting-started-with-compute-training.png",
            icon: <AwsIcon />,
        },
        {
            name: "MongoDB CRUD Operations in Python",
            issuer: "MongoDB",
            issueDate: "Oct 2026",
            id: "MDBr6qfkbiwre",
            verifyUrl: "https://learn.mongodb.com/c/nB-K6hQ5RDaWUMA85NGYxA",
            pdfPath: "/assets/certs/mongodb_crud_operations_in_python.pdf",
            icon: <MongoDbIcon />,
        },
        {
            name: "Web Development Fundamentals",
            issuer: "IBM",
            issueDate: "Oct 2026",
            id: "PLAN-8749C02A78EC",
            verifyUrl: "https://www.credly.com/badges/e2f488cc-ae60-4b84-ae59-202272480763/public_url",
            pdfPath: "/assets/certs/web_development_fundamentals_certificate.pdf",
            icon: <IbmIcon />,
        },
        {
            name: "React (Basic) Certificate",
            issuer: "HackerRank",
            issueDate: "Oct 2026",
            id: "5F2C311FDE09",
            verifyUrl: "https://www.hackerrank.com/certificates/5F2C311FDE09",
            pdfPath: "/assets/certs/react_basic_certificate.pdf",
            icon: <HackerRankIcon />,
        },
        {
            name: "Rest API (Intermediate) Certificate",
            issuer: "HackerRank",
            issueDate: "Oct 2026",
            id: "DC2B50754DBF",
            verifyUrl: "https://www.hackerrank.com/certificates/DC2B50754DBF",
            pdfPath: "/assets/certs/rest_api_intermediate_certificate.pdf",
            icon: <HackerRankIcon />,
        },
        {
            name: "CSS (Basic) Certificate",
            issuer: "HackerRank",
            issueDate: "Oct 2026",
            id: "C10163EE1B45",
            verifyUrl: "https://www.hackerrank.com/certificates/C10163EE1B45",
            pdfPath: "/assets/certs/css_certificate.pdf",
            icon: <HackerRankIcon />,
        },
        {
            name: "JavaScript (Intermediate) Certificate",
            issuer: "HackerRank",
            issueDate: "Sep 2026",
            id: "F9761E9B36B8",
            verifyUrl: "https://www.hackerrank.com/certificates/F9761E9B36B8",
            pdfPath: "/assets/certs/javascript_intermediate_certificate.pdf",
            icon: <HackerRankIcon />,
        },
        {
            name: "JavaScript (Basic) Certificate",
            issuer: "HackerRank",
            issueDate: "Sep 2026",
            id: "C6B610EF1DD7",
            verifyUrl: "https://www.hackerrank.com/certificates/c6b610ef1dd7",
            pdfPath: "/assets/certs/javascript_basic_certificate.pdf",
            icon: <HackerRankIcon />,
        },
        {
            name: "Python (Basic) Certificate",
            issuer: "HackerRank",
            issueDate: "Sep 2026",
            id: "0383B7E2AB0B",
            verifyUrl: "https://www.hackerrank.com/certificates/0383b7e2ab0b",
            pdfPath: "/assets/certs/python_basic_certificate.pdf",
            icon: <HackerRankIcon />,
        },
    ]

    return (
        <section id="certifications" className="py-24 px-4 bg-[#F7F4EF]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12 tracking-tight">
                    My <span className="text-[#2563EB]">Certifications</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.name} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CertificationCard({ cert }) {
    return (
        <div className="group flex flex-col bg-white rounded-xl border border-black/15 p-6 shadow-[0_1px_0_rgba(20,20,20,0.06),0_8px_16px_-12px_rgba(20,20,20,0.2)] transition-all duration-300 hover:border-[#B3261E]/40 hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(179,38,30,0.35)]">
            <div className="flex items-start gap-3">
                <span className="w-6 h-6 shrink-0 text-black/70 group-hover:text-[#B3261E] transition-colors duration-300">
                    {cert.icon}
                </span>
                <h3 className="text-base font-semibold text-black leading-snug">{cert.name}</h3>
            </div>
            <p className="text-sm text-black/55 mt-3">
                {cert.issuer} &middot; {cert.issueDate}
            </p>
            {cert.id && <p className="text-xs text-black/40 mt-1 break-all">ID: {cert.id}</p>}
            <div className="mt-auto pt-5 border-t border-black/10 flex items-center justify-between gap-3">
                <a
                    href={cert.verifyUrl}
                    target={cert.verifyUrl !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black/55 hover:text-[#B3261E] transition-colors duration-300 inline-flex items-center gap-1"
                >
                    <span>Verify Credential</span>
                    <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                    href={cert.pdfPath}
                    download={cert.name.toLowerCase().replace(/\s+/g, '-')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/40 hover:text-[#B3261E] transition-colors duration-300"
                >
                    Download &darr;
                </a>
            </div>
        </div>
    )
}

export default Certifications

function AwsIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h3M8 6h3M13 6h3.5M18.5 6h2.5" />
            <path d="M3 15c5.5 3.5 12.5 3.5 18 0" />
            <path d="M17.5 13.2l3.8 1.8-2.6 2.3" />
        </svg>
    )
}

function MongoDbIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3c2.6 3.6 4.5 6.2 4.5 9.2a4.5 4.5 0 0 1-9 0c0-3 1.9-5.6 4.5-9.2z" />
            <path d="M12 8.5V21" />
        </svg>
    )
}

function IbmIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16M6 8h12M4 12h16M6 16h12M4 20h16" />
        </svg>
    )
}

function HackerRankIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M9.5 9l-2.5 3 2.5 3" />
            <path d="M14.5 9l2.5 3-2.5 3" />
        </svg>
    )
}
