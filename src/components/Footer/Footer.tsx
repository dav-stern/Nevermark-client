import React from 'react';

import PropTypes from 'prop-types';

import './Footer.css';

interface FooterProps {
  handleSignOpen: any;
  handleLogOpen: any;
}

const Footer: React.FC<FooterProps> = ({ handleSignOpen,handleLogOpen }) => (
  <footer className="footer-container">
    <div className="footer-els-container">
      <a href="#home" className="logo-footer">nevermark</a>
      <div className="footer-els-container-links-fir">
        <span className="footer-el">
          <button type="button" className="footer-el-link button-footer" onClick={handleSignOpen}>
            Sign Up
          </button>
        </span>
        <span className="footer-el">
          <button type="button" className="footer-el-link button-footer" onClick={handleLogOpen}>
            Log In
          </button>
        </span>
      </div>
      <div className="footer-els-container-links-sec">
        <span className="footer-el"><a href="#about" className="footer-el-link">Features</a></span>
        <span className="footer-el"><a href="#pricing" className="footer-el-link">Pricing</a></span>
        <span className="footer-el"><a href="#about" className="footer-el-link">About</a></span>
      </div>
      <div className="footer-els-container-links-thi">
        <span className="trademark">© 2019, A Nevermark Corporation</span>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  handleSignOpen : PropTypes.func.isRequired,
  handleLogOpen : PropTypes.func.isRequired,
};

export default Footer;
