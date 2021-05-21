// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import Counter from 'src/containers/Counter';
import Header from '../../containers/header';
import Home from '../../containers/home';
import Connect from '../../containers/connect';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
  <Header />
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/connexion">
      <Connect />
    </Route>
    <h1>Composant : App</h1>
    <img src={reactLogo} alt="react logo" />
    <Counter />
  </div>
);

// == Export
export default App;
