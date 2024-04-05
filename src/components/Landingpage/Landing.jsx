import React from 'react'
import "./Landing.css"
import { FaCloudArrowDown } from "react-icons/fa6";
import { useTypewriter } from "react-simple-typewriter";
import vicky from "../../assets/vicky-bg-2.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Landing = () => {

    
  const [typewriter] = useTypewriter({
    words: ["MERN Stack Developer","Frontend Developer", "Backend Developer"],
    loop: {},
    typeSpeed: 200,
    delaySpeed: 200,
  });



  return (
    <div>
        <div id='home' className='landing-container'>
            <div className='landing-1'>
                <h1>Hey,</h1>
                <h1>I am Vignesh !</h1>
                <p style={{color:"#951af1"}}>{typewriter}</p>
                <div>
                  <div className='pa'>
                  Trust in my expertise and commitment to excellence, and I'll collaborate wholeheartedly to bring  innovative solutions, demonstrating professionalism and diligence at every step.
                  </div>
                <button className='cv-btn' >
                  <a href="vignesh RESUME - MERN STACK.pdf" download="Vignesh-Resume" style={{textDecoration:"none",color:"#951af1"}}>Check Resume</a>
                  <span><FaCloudArrowDown /></span>
                  </button>
                <div className='socail-media'>
                <a href="https://www.linkedin.com/in/vigneshm2409/"><p>  <IoLogoLinkedin /></p></a>
                <a href="https://wa.me/919003442739"><p><FaSquareWhatsapp /></p></a>
              <a href="https://github.com/vignesh0923"><p><FaGithubSquare /></p></a>
                </div>
            </div>
            </div>
        
       
        <div className='landing-2'>
            <img src={vicky} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Landing