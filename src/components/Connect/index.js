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
        <div className="userName input">
          <label className="input-label">EMAIL</label>
          <input className="input-text" type="text" id="name" required></input>
        </div>
        <div className="password input">
          <label className="input-label">MOT DE PASSE</label>
          <input className="input-text" type="password"  id="password" required></input>
        </div>
        <button className="input input-submit" type="submit">CONNEXION</button>
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
