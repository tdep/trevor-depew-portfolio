import { useState, useEffect } from 'react'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {



  

  return (
    <div id="window">
      <div id="home" className="content-container">
        <div id="title-name">
          <h1>Trevor DePew</h1>
          <h4>Software Engineer</h4>
        </div>
        <div id="links">
          <a id="about-link" href="#about">About</a>
          <p>|</p>
          <a id="experience-link" href="#experience">Experience</a>
          <p>|</p>
          <a id="projects-link" href="#projects">Projects</a>
          <p>|</p>
          <a id="contact-link" href="#contact">Contact</a>
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="about" className="page-container">
        <h2 className="section-title">About</h2>
        <div className="content-container">
          <About />
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="experience" className="page-container">
        <h2 className="section-title">Experience</h2>
        <div className="content-container">
          <Experience />
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="projects" className="page-container">
        <h2 className="section-title">Projects</h2>
        <div className="content-container">
          <Projects />
        </div>
      </div>
      <hr className="solid"></hr>
      <div id="contact" className="page-container">
        <h2 className="section-title">Contact</h2>
        <Contact />
      </div>
      <hr className="solid"></hr>
      <div id="footer">
        <div className="contentContainer">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
