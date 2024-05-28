import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <h4>Thank You For Visiting My Website.</h4>
      <div className="social">
        <h4>Contact Me - </h4>
        <a href="https://www.linkedin.com/in/rohith-kumar-tetali-04a647296/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://instagram.com/_rohith_kumar__?utm_medium=copy_link" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://github.com/RohithKumar08"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://twitter.com/_rohith_kumar__"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <p>© 2024 Rohith Kumar Tetali. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

