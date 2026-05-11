import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <About /> 
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App