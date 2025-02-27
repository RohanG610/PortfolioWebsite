import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Navbar from './components/NavBar';
import Projects from './components/Project';
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div id='App'>
      <Navbar />
      <Hero />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;