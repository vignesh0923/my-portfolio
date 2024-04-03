import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Landing from "./components/Landingpage/Landing"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Title from "./components/Title/Title"
import Titlelft from "./components/Title/Titlelft"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <div>
        <Title subtitle="Let me Introduce Myself" title="About" hr="Me"/>
      <About/>
      <Titlelft titlee="Skill" hrr="s"/>
      <Skills/>
      <Title hr="Projects"/>
      <Projects/>
      <Titlelft titlee="Contac" hrr="t"/>
      <Contact/>
      </div>
     
    </div>
  )
}

export default App