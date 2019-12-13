import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar'

//import NotFound from './components/404/NotFound.js';
import LoginContainer from './components/Login/LoginContainer';
import SignupPaciente from './components/Signup /SignupPaciente';
import SignupPsicologo from './components/SignupPsicologo/SignupPsicologo';

const Router = () => (
  <BrowserRouter>
   <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupPaciente} />
      <Route exact path="/signupsi" component={SignupPsicologo} />
      <Route exact path="/login" component={LoginContainer} />
      
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
