import React, { useState } from "react";
import "./style/ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact me</h2>
      <div className="contact-content">
        <div className="stay-connected">
          <h3>Stay Connected</h3>
          <p>
            I am active on almost all the below social media, just say “hi” or
            “we shall accelerate today,” will connect with you, else, here is my
            email: ozy@gmail.com
          </p>
          <div className="social-icons">
            <a href="https://discord.com/users/r61033" target="_blank" rel="noopener noreferrer" className="icon icon-discord"></a>
            <a href="https://github.com/RohanG610" target="_blank" rel="noopener noreferrer" className="icon icon-github"></a>
            <a href="https://x.com/OzyBehindScreen" target="_blank" rel="noopener noreferrer" className="icon icon-x"></a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="get-in-touch">
          <h3>Get in touch</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="textarea-field"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="submit-button" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;