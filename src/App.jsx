import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Project';
import ContactMe from './components/ContactMe/ContactMe';
import ScrollingSkills from './components/ScrollingSkills/ScrollingSkills';
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