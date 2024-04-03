import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="contact-head">
        <p>Get in Touch</p>
      </div>

      <div className="contact-container">
        <div className="left-container">
          <div className="left">
            <div>
              <IoMdCall />
            </div>
            <div>
              <p>Call Me</p>
              <p>+91 90034-42739</p>
            </div>
          </div>

          <div className="left">
            <div>
              <IoMail />
            </div>
            <div>
              <p>Email</p>
              <p>Vigneshmuralikumar0929@gmail.com</p>
            </div>
          </div>

          <div className="left">
            <div>
              <FaLocationDot />
            </div>
            <div>
              <p>Location</p>
              <p>Pudukkottai - TamilNadu</p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <form>
            <div className="input-container">
              <div className="inputbox">
                <input required="required" type="text" />
                <span>Name</span>
                <i />
              </div>
            </div>

            <div className="input-container">
              <div className="inputbox">
                <input required="required" type="email" />
                <span>Email</span>
                <i />
              </div>
            </div>

            <div className="input-container">
              <div className="inputbox">
                <input required="required" type="text" />
                <span>Message</span>
                <i />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
