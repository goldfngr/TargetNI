import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import 'bootstrap.min.css';
import 'bootstrap.min.js';

function App() {
  return (
    <>
      <Router basename={"/targetni-demo"}>
        <Navbar />
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/services' component={ Services } />
              <Route path='/products' component={ Products } />
              <Route path='/team' component={ Team } />
              <Route path='/sign-up' component={ SignUp } />
            </Switch>
      </Router>
    </>
  );
}

export default App;
