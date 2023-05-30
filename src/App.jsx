import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {

  return (
    <h1>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </h1>
  )
}

export default App
