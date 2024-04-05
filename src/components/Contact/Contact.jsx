import "./Contact.css";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const updateEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g8pt4na', 'template_r40thib', form.current, {
        publicKey: 'EJyg4ShHssJIT7mpn',
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your Message Successfully Submitted");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Please Check Your Message");
        }
      );
  };


  return (
    <div>
      <div id="Contact Us" className="contact-head">
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
          <form ref={form} onSubmit={updateEmail}>
            <div className="input-container">
              <div className="inputbox">
                <input  type="text" name="user_name" required />
                <span>Name</span>
                <i />
              </div>
            </div>

            <div className="input-container">
              <div className="inputbox">
                <input  name="user_mail"  type="email" required />
                <span>Email</span>
                <i />
              </div>
            </div>

            <div className="input-container">
              <div className="inputbox">
                <input  name="user_message" type="text" required />
                <span>Message</span>
                <i />
              </div>
            </div>

            <div className="input-container">
            <input className="btnn" type="submit" value="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
