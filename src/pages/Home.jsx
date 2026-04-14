import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certificate from '../components/Certificate'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Certificate/>
      <Contact />
    </div>
  )
}

export default Home
