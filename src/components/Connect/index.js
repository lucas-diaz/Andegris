// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.css';

// == Composant
const Connexion = ({ }) => (
  <div className="connect">
    <div className="login">
      <div className="select">
        <button className="select-button">Connexion</button>
        <button className="select-button">Inscription</button>
      </div>
      <form>
        <div className="userName">
          <label>nom d'utilisateur</label>
          <input type="text" id="name" required></input>
        </div>
        <div className="password">
          <label>password</label>
          <input type="password"  id="password" required></input>
        </div>
        <input type="submit" value="signIn"></input>
      </form>

    </div>
  </div>
);

Connexion.propTypes = {

};

Connexion.defaultProps = {

};
// == Export
export default Connexion;
