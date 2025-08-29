import React from 'react';
import './App.css';

import SmokeCursor from './components/SmokeCursor'; 
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import './App.css';

const App = () => {
  return (
    <>
      <SmokeCursor />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <p
        style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '2rem', 
        }}
      >
        Web Developer 2025
      </p>

    </>
  );
};

export default App;
