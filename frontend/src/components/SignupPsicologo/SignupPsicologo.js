import React from 'react';
import {MyContext} from "../../context";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function SignupPsicologo(props) {
  const classes = useStyles();

  return (
    <MyContext.Consumer>
      {context => (
    <form onSubmit={ e => {
      context.handleSignupDoctor(e)
      props.history.push('/login')
    }}className={classes.root} noValidate autoComplete="off">

      <TextField 
       id="username" 
       label="Nombre Completo" 
       variant="outlined" 
       type="text"
       name="username"
       value = {context.formSignup.username}
       onChange={e => context.handleInput(e,"formSignup")}
      />
      <TextField
       id="email" 
       label="Correo" 
       variant="outlined" 
       type="email"
       name="email"
       value = {context.formSignup.email}
       onChange={e => context.handleInput(e,"formSignup")}
        />
      <TextField
       id="cedula"
       label="Cédula Profesional" 
       variant="outlined" 
       type="text"
       name="cedula"
       value = {context.formSignup.cedula}
       onChange={e => context.handleInput(e,"formSignup")}
       required/>
      <TextField 
       id="phone"
       label="Celular"
       variant="outlined"
       type="Number"
       name="phone"
       value = {context.formSignup.phone}
       onChange={e => context.handleInput(e,"formSignup")}
       required
       />
      <TextField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          onChange={e => context.handleInput(e, "formSignup")}
          value={context.formSignup.password}
        />
        <Button type='submit' variant="contained" color="primary">Crear Cuenta</Button>
    </form>
     )}
    </MyContext.Consumer>
   
  );
}