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
        <div className='landing-container'>
            <div className='landing-1'>
                <h1>Hey,</h1>
                <h1>I am Vignesh !</h1>
                <p style={{color:"#951af1"}}>{typewriter}</p>
                <div>
                <button className='cv-btn'>
                  Dowload CV
                  <span><FaCloudArrowDown /></span>
                  </button>
                <div className='socail-media'>
              <p>  <IoLogoLinkedin /></p>
                <p><FaSquareWhatsapp /></p>
              <p>  <FaGithubSquare /></p>
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