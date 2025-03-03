import React from "react";
import "./style/ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h2>Contact me</h2>
      <div className="contact-content">
        <div className="stay-connected">
          <h3>Stay Connected</h3>
          <p>
            I am active on almost all the below social media, just say “hi” or
            “we shall accelerate today,” will connect with you. Else, here is my
            email: hello@gmail.com
          </p>
          <div className="social-icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
            {/* <div className="icon"></div> */}
          </div>
        </div>
        <div className="divider"></div>
        <div className="get-in-touch">
          <h3>Get in touch</h3>
          <div className="input-field"></div>
          <div className="input-field"></div>
          <div className="textarea-field"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
