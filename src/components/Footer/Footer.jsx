import "./Footer.css"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer">
                <div className="foot">
                    <h3>Vignesh M</h3>
                    <p className="para">
Trust in my expertise and commitment to excellence, and I'll collaborate<br></br> wholeheartedly to bring  innovative solutions, demonstrating professionalism<br></br> and diligence at every step.</p>
<div className="social">
<a href="https://www.linkedin.com/in/vigneshm2409/"><p>  <IoLogoLinkedin /></p></a>
                <a href="https://wa.me/919003442739"><p><FaSquareWhatsapp /></p></a>
              <a href="https://github.com/vignesh0923"><p><FaGithubSquare /></p></a>
</div>
                </div>

                <div  className="foot">
                    <h4>Quick Links</h4>
                    <a href="#home"><p>Home</p></a>
                <a href="#About Us"><p>About us</p></a>
                <a href="#Skills"><p>Skills</p></a>
                <a href="#projects"><p>Projects</p></a>
                <a href="#projects"><p>Contact Us</p></a>
                </div>
                <div  className="foot">
                    <h4>My Services</h4>
                    <p>Frontend Development</p>
                    <p>Backend Development</p>
                    <p>MERN Stack Development</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer