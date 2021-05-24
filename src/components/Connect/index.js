// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.css';

// == Composant
const Connexion = ({ onInputChange, formData, onFormSubmit }) => {
  const handleInputChange = (evt) => {
    // Name est le nom de l'input qui a appelé cette fonction
    // et Value est ce qui a été tapé dans l'input
    const { name, value } = evt.target;
    console.log(evt)
    // Ici je ne veux pas faire un objet avec une propriété
    // name. Je veux un objet avec une propriété
    // email ou password (cette valeur se trouve dans name)
    onInputChange({
      [name]: value,
    });
  };

  return(
    <div className="connect">
      <div className="login">
        <div className="select">
          <button className="select-button">Connexion</button>
          <button className="select-button">Inscription</button>
        </div>
        <form onSubmit={(evt) => {evt.preventDefault(); onFormSubmit()}}>
          <div className="userName input">
            <label className="input-label">EMAIL</label>
            <input onChange={handleInputChange} name="email" value={formData.email} className="input-text" type="text" id="name" required></input>
          </div>
          <div className="password input">
            <label className="input-label">MOT DE PASSE</label>
            <input onChange={handleInputChange} name="password" value={formData.password} className="input-text" type="password"  id="password" required></input>
          </div>
          <button className="input input-submit" type="submit">CONNEXION</button>
        </form>

      </div>
    </div>
  )



};

Connexion.propTypes = {

};

Connexion.defaultProps = {

};
// == Export
export default Connexion;
