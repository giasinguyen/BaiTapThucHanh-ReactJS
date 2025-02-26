import React from 'react';
import './footer.css';
import logo from './logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            Welcome to our website, a wonderful place to explore and learn how to
            cook like a pro.
          </p>
          <div className="footer-subscribe">
            <input type="text" placeholder="Enter your email" />
            <button>Send</button>
          </div>
        </div>

        <div className="footer-column">
          <h4>Learn More</h4>
          <ul>
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Recipes</h4>
          <ul>
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Cheffy Logo"
          />
          <span>Cheffy</span>
        </div>
        <p>© 2023 Cheffy Company • Terms of Service • Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
