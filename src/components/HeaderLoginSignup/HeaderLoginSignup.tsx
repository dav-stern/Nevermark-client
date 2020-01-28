import React from 'react';
import PropTypes from 'prop-types';

import './HeaderLoginSignup.css';

interface HeaderLoginSignupProps {
  handleSignOpen: any;
  handleLogOpen: any;
}

const HeaderLoginSignup: React.FC<HeaderLoginSignupProps> = ({ handleSignOpen,handleLogOpen }) => (
  <header className="header-loginsignup">
    <div className="logo-container-loginsignup">
      <a href="#home" className="logo-loginsignup">nevermark</a>
    </div>
    <nav className="header-loginsignup-nav">
      <ul className="nav-list-loginsignup">
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">Features</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">Pricing</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <div className="hls-cont-navel">
            <a href="#features" className="link-loginsignup">About</a>
          </div>
        </li>
        <li className="nav-element-loginsignup">
          <button type="button" className="hls-cont-navel link-loginsignup button-header" onClick={handleSignOpen}>
            Sign Up
          </button>
        </li>
        <li className="nav-element-loginsignup last">
          <button type="button" className="hls-cont-navel link-loginsignup button-header" onClick={handleLogOpen}>
            Log In
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

HeaderLoginSignup.propTypes = {
  handleSignOpen : PropTypes.func.isRequired,
  handleLogOpen : PropTypes.func.isRequired,
};

export default HeaderLoginSignup;
