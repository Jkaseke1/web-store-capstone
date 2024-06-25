
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ username }) {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/store" className="nav__link">
              Store
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/cart" className="nav__link">
              Cart
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/register" className="nav__link">
              Register
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/account" className="nav__link">
              Account
            </Link>
          </li>
        </ul>
      </nav>
      {username && <p>Welcome, {username}</p>}
    </header>
  );
}

export default Header;