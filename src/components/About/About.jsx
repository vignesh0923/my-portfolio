import React from "react";
import "./About.css";
import vicky from "../../assets/vicky-bg.png";

const About = () => {
  return (
    <div>
    
      <div className="abt-container">
        <div>
          <p>
          I am Vignesh from Pudukkottai, and I have completed my undergraduate degree in <span style={{color:"#951af1"}}>Computer Application</span> with a commendable <span  style={{color:"#951af1"}}>CGPA of 8.38</span> from <span  style={{color:"#951af1"}}>Annai Vailankanni Arts & Science College in Thanjavur</span>. As a Junior MERN Stack Developer, I bring to the table a diverse skill set encompassing <span  style={{color:"#951af1"}}>HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, SQL, and ExpressJS.</span> My passion lies in crafting seamless web solutions that enhance user experiences. I am always eager to collaborate on innovative projects and am committed to continuous learning from the best in the field. Let's connect and work together to create magic
          </p>
        </div>
        <div>
          <img src={vicky} alt="" />
        </div>
      </div>
      <div className="abt-para">
        <p>Education</p>
        <hr></hr>
      </div>
      
      <div className="experience-container">
        <div className="experience-1">
            <h4>MERN Stack Developer</h4>
            <h4>BCA (CS) - 73%</h4>
            <h4>HSC - 58%</h4>
            <h4>SSLC - 85%</h4>
            <button className='cv-btn'>Dowload CV</button>
        </div>

        <div className="experience-1">
        <p>(September - November (2023))</p>
        <p>(2020 - 2023)</p>
        <p>(2020)</p>
        <p>(2018)</p>
        </div>
        
        <div className="experience-1">
  <p>Error Makes Clever Academy - Keeranur</p>
  <p>Annai Vailankanni Arts & Science College - Thanjavur</p>
  <p>ST. Antonys Higher Secondary School - Thanjavur</p>
  <p>ST . Marys Higher Secondary School - Pudukkottai</p>
        </div>
      </div>
    </div>
  );
};

export default About;
