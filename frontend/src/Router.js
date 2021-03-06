import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
//import NotFound from './components/404/NotFound.js';
import LoginContainer from './components/Login/LoginContainer';
import SignupPaciente from './components/Signup /SignupPaciente';
import SignupPsicologo from './components/SignupPsicologo/SignupPsicologo';
import Profile from './components/Profile/Profile';
import ButtonAppBar from './components/Navbar/Navbar';
import RegistroPacientes from './components/Registro/RegistroPacientes';


const Router = () => (
  <BrowserRouter>
   <ButtonAppBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupPaciente} />
      <Route exact path="/signupsi" component={SignupPsicologo} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/registro" component={RegistroPacientes} /> 
    </Switch>
  </BrowserRouter>
);

export default Router;
