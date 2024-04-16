import React from "react";
import "./About.css";
import vicky from "../../assets/vicky-bg.png";
import { FaCloudArrowDown } from "react-icons/fa6";
const About = () => {
  return (
    <div>
    
      <div id="About Us" className="abt-container">
        <div>
          <p data-aos="fade-up"
     data-aos-duration="1000">
          I am Vignesh from Pudukkottai, and I have completed my undergraduate degree in <span style={{color:"#951af1"}}>Computer Application</span> with a commendable <span  style={{color:"#951af1"}}>CGPA of 8.38</span> from <span  style={{color:"#951af1"}}>Annai Vailankanni Arts & Science College in Thanjavur</span>. As a Junior MERN Stack Developer, I bring to the table a diverse skill set encompassing <span  style={{color:"#951af1"}}>HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL, and ExpressJS.</span> My passion lies in crafting seamless web solutions that enhance user experiences. I am always eager to collaborate on innovative projects and am committed to continuous learning from the best in the field. Let's connect and work together to create magic
          </p>
        </div>
        <div>
          <img src={vicky} alt="" />
        </div>
      </div>
      <div data-aos="fade-right" className="abt-para">
        <p>Education</p>
        <hr></hr>
      </div>
      
      <div className="experience-container">
        <div className="experience-1">
            <h4  data-aos="fade-up"
     data-aos-duration="1000">MERN Stack Developer</h4>
            <h4  data-aos="fade-up"
     data-aos-duration="1000">BCA (CS) - 73%</h4>
            <h4  data-aos="fade-up"
     data-aos-duration="1000">HSC - 58%</h4>
            <h4  data-aos="fade-up"
     data-aos-duration="1000">SSLC - 85%</h4>
            <button  data-aos="fade-up"
     data-aos-duration="1000" className='cv-btn' >
                  <a href="vignesh RESUME - MERN STACK.pdf" download="Vignesh-Resume" style={{textDecoration:"none",color:"#951af1"}}>Check Resume</a>
                  <span><FaCloudArrowDown /></span>
                  </button>
        </div>

        <div className="experience-1">
        <p  data-aos="fade-up"
     data-aos-duration="1000" >(September - November (2023))</p>
        <p  data-aos="fade-up"
     data-aos-duration="1000">(2020 - 2023)</p>
        <p  data-aos="fade-up"
     data-aos-duration="1000">(2020)</p>
        <p  data-aos="fade-up"
     data-aos-duration="1000">(2018)</p>
        </div>
        
        <div className="experience-1">
  <p  data-aos="fade-up"
     data-aos-duration="1000" >Error Makes Clever Academy - Keeranur</p>
  <p  data-aos="fade-up"
     data-aos-duration="1000">Annai Vailankanni Arts & Science College - Thanjavur</p>
  <p  data-aos="fade-up"
     data-aos-duration="1000">ST. Antonys Higher Secondary School - Thanjavur</p>
  <p  data-aos="fade-up"
     data-aos-duration="1000">ST . Marys Higher Secondary School - Pudukkottai</p>
        </div>
      </div>
    </div>
  );
};

export default About;
