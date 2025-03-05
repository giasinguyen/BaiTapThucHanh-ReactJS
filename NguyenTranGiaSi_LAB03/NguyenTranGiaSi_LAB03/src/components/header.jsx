import React from 'react';
import './header.css';
import dataMenu from '../data/dataMenu.json';
import logo from './logo.png';
import avatar from './avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img
          src={logo}
          alt="Cheffy Logo"
          className="logo-image"
        />
        <span className="logo-text">Cheffy</span>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Nguyễn Trần Gia Sĩ"
          className="search-input"
        />
      </div>

      <nav className="nav-links">
        {Object.keys(dataMenu).map((key, index) => (
          <a href={dataMenu[key]} className="nav-link" key={index}>
            {key}
          </a>
        ))}
      </nav>
      
      <div className="user-section">
        <button className="recipe-box-btn">My Recipe Box</button>
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}

export default Header;
