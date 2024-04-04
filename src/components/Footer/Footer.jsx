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
<p>  <IoLogoLinkedin /></p>
                <p><FaSquareWhatsapp /></p>
              <p>  <FaGithubSquare /></p>
</div>
                </div>

                <div  className="foot">
                    <h4>Quick Links</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Skills</p>
                    <p>My Projects</p>
                    <p>Contact Us</p>
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