import React from 'react';
import footer from './footer.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
     <a href="https://chetanmalhotra.me"> <img src={footer} alt="footer" className="Footerlogo" /></a>
    
    </div>
  );
}

export default Footer;