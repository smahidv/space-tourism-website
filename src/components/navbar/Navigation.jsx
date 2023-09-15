import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import './navigation.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible'; 
    }
  }

  return (
    <header className='header-container'>
      <div className="primary-header-2 flex">
        <img className="logo" src={logo} alt="logo" />
        <div className="header-icons-mobile">
          {isMenuOpen ? (
            <img onClick={toggleMenu} className="close" src={close} alt="close icon" />
          ) : (
            <img onClick={toggleMenu} className="hamburger" src={hamburger} alt="hamburger icon" />
          )}
        </div>
      </div>

      <nav>
        <ul className={`primary-navigation flex ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link style={{ textDecoration: 'none', fontFamily:'ABeeZee'}} to="/">
              <span>00</span>Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', fontFamily:'ABeeZee' }} to="/destination">
              <span>01</span>Destination
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' , fontFamily:'ABeeZee'}} to="/crew">
              <span>02</span>Crew
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none', fontFamily:'ABeeZee' }} to="/technology">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
