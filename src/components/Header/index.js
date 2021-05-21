// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './styles.css';

// == Composant
const Header = ({ openMenu, actionOpenMenu }) => (
  <header className="header">
    <Link to="/"><h1>Andegris</h1></Link>
    {/* nav mobile */}
    <div className="icon" onClick={actionOpenMenu}>Icon</div>

    {/* nav ecran */}
    <nav className={`navbar ${openMenu ? "responsive" : ""}`}>
      <ul className="navbar-nav">
        <Link to="/inscription"><li className="navbar-li">{openMenu}Inscription</li></Link>
        <Link to="/connexion"><li className="navbar-li border">Connexion</li></Link>
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
