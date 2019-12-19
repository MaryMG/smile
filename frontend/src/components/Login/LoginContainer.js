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

export default function LoginContainer (props) {
  const classes = useStyles();

     return (
    <MyContext.Consumer>
      {context =>(
         <form onSubmit = {e =>{
           context.handleLogin(e, () =>{
            props.history.push('/profile')
           })
        }} className={classes.root} noValidate autoComplete="off">

      <TextField 
      id="email"
      label="Correo" 
      variant="outlined" 
      autoComplete= "email"
      type="email" 
      name="email"
      value={context.loginForm.email}
      onChange={e => context.handleInput(e, 'loginForm')}
      />
      <TextField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          valuevalue={context.loginForm.password}
          onChange={e => context.handleInput(e, 'loginForm')}
        />
        <Button type='submit' variant="contained" color="primary">LOGIN</Button>
    </form>
    )}
    </MyContext.Consumer> 
   )
  
}

