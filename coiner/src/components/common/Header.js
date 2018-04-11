import React from 'react';
import logo from './logo.png';
import tagline from './tagline.png';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" className="Header-logo" />
      <img src={tagline} alt="tagline" className="tagline" />
    </div>
  );
}

export default Header;