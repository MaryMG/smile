import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/Navbar/Navbar'

//import NotFound from './components/404/NotFound.js';
import LoginContainer from './components/Login/LoginContainer';
import SignupPaciente from './components/Signup /SignupPaciente';
import SignupPsicologo from './components/SignupPsicologo/SignupPsicologo';
import Profile from './components/Profile/Profile';
import Datos from './components/Profile/DatosUser';

const Router = () => (
  <BrowserRouter>
   <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupPaciente} />
      <Route exact path="/signupsi" component={SignupPsicologo} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/profile" component={Profile} />
      <Router exact path="/datos" component={Datos} />
      
      
      
    </Switch>
  </BrowserRouter>
);

export default Router;
