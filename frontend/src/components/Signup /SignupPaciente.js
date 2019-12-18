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

export default function SignupPaciente(props) {
  const classes = useStyles();
  return (
    <MyContext.Consumer>
      {context =>(
    <form onSubmit={ e => {
      context.handleSignup(e)
      props.history.push('/login')
    }} className={classes.root} noValidate autoComplete="off" >

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
       id="age"
      label="Edad" 
      variant="outlined"
      type="Number"
      name="age"
      value = {context.formSignup.age}
      onChange={e => context.handleInput(e,"formSignup")}
       />
      <TextField 
      id="email" 
      label="Correo" 
      variant="outlined"
      autoComplete= "email"
      type="email" 
      name="email"
      value = {context.formSignup.email}
      onChange={e => context.handleInput(e,"formSignup")}

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
