import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/Homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Pages</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
