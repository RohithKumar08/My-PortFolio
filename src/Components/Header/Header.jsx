import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'
import myImage from './mee.jpg';
import Footer from '../Footer/Footer';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-logo">Rohith Kumar Tetali</NavLink>
          <img src={myImage} width={120} height={120}/>
        </div>
        <nav className="navbar-links">
          <NavLink to="/about" className="navbar-item">About</NavLink>
          <NavLink to="/skills" className="navbar-item">Skills</NavLink>
          <NavLink to="/projects" className="navbar-item">Projects</NavLink>
          <a className="navbar-item" href="https://drive.google.com/file/d/1a2aDKd1SiNF1XLqAFFIe-LYP2xACFUWi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            View CV
          </a>
        </nav>
      </div>
      <Footer />
    </header>
  );
}

export default Header;




