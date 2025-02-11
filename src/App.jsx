import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <a href="#banner" className="nav-link">Banner</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#mail-me" className="nav-link">Contact</a>
      </div>

      {/* Banner Section */}
      <section className="banner" id="banner">
        <div className="content">
          <h1>Rohan Gaikwad</h1>
          <p>Hello, Rohan here! Welcome to mySpace 😁!</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="content">
          <h2>Services</h2>
          <div className="skills-grid">
            <div className="skill">Machine Learning</div>
            <div className="skill">Web Design</div>
            <div className="skill">Web Development</div>
            <div className="skill">App Development</div>
            <div className="skill">Digital Marketing</div>
            <div className="skill">Data Analytics</div>
            <div className="skill">Cloud Computing</div>
            <div className="skill">Video Editing</div>
          </div>
        </div>
      </section>

      {/* Mail Me Section */}
      <section className="mail-me" id="mail-me">
        <div className="content">
          <h2>Contact Me</h2>
          <p>Need any services? Need any work done? Contact me!</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;