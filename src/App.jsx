import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Landing from "./components/Landingpage/Landing"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Title from "./components/Title/Title"
import Titlelft from "./components/Title/Titlelft"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Titlelft2 from "./components/Title/Titlelft2"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import Experinece from "./components/Experience/Experinece"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <ToastContainer style={{ left: "60", zIndex:"999999" }}/>
      <Navbar/>
      <Landing/>
      <div>
        <Title subtitle="Let me Introduce Myself" title="About" hr="Me"/>
      <About/>
      <Titlelft2 titleee="Experienc" hrrr="e"/>
      <Experinece/>
      <Titlelft2 titleee="Skill" hrrr="s"/>
      <Skills/>
      <Title subtitle="Crafting Digital Experience" title="My" hr="Projects"/>
      <Projects/>
      <Titlelft titlee="Contact" hrr="Me" />
      <Contact/>
      <Footer/>
      </div>
     
    </div>
  )
}

export default App