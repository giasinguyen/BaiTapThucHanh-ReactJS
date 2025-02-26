import React from 'react';
import './header.css'; 
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
        <a href="#" className="nav-link">What to cook?</a>
        <a href="#" className="nav-link">Recipes</a>
        <a href="#" className="nav-link">Ingredients</a>
        <a href="#" className="nav-link">Occasions</a>
        <a href="#" className="nav-link">About us</a>
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
