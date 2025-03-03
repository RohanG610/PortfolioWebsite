import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Navbar from './components/NavBar';
import Projects from './components/Project';
import ContactMe from './components/ContactMe'
import ScrollingSkills from './components/ScrollingSkills';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <ScrollingSkills/>
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;