import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import type { SectionId } from './types'

export default function App() {
  const [active, setActive] = useState<SectionId>('home')

  return (
    <>
      <Navbar active={active} onNavigate={setActive} />
      <main>
        {active === 'home' && <Hero onNavigate={setActive} />}
        {active === 'about' && <About />}
        {active === 'experience' && <Experience />}
        {active === 'skills' && <Skills />}
        {active === 'education' && <Education />}
        {active === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}
