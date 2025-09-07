import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/about'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
