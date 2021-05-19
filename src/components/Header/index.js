// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.css';

// == Composant
const Header = () => (
  <header className="header">
  <h1>Andegris</h1>
    <nav className="navbar">
      <ul className="navbar-nav">
        <Link to="/inscription"><li>Inscription</li></Link>
        <Link to="/connexion"><li>Connexion</li></Link>
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
