import React, { useState }from 'react';
import '../styles/Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {setIsOpen(!isOpen);};

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About Me</a></li>
        <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
