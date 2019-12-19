import React from 'react';
import {MyContext} from "../../context";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function SignupPsicologo(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
    <MyContext.Consumer>
      {context => (
    <form onSubmit={ e => {
      context.handleSignupDoctor(e)
      props.history.push('/login')
    }}className={classes.form} noValidate>
     <Grid container spacing={2}>
     <Grid item xs={12}>
      <TextField 
       id="username" 
       label="Nombre Completo" 
       variant="outlined" 
       required
       fullWidth
       autoFocus
       type="text"
       name="username"
       value = {context.formSignup.username}
       onChange={e => context.handleInput(e,"formSignup")}
      />
      </Grid> 
      <Grid item xs={12}>
      <TextField
       id="email" 
       label="Correo" 
       variant="outlined"
       autoComplete= "email" 
       required
       fullWidth
       type="email"
       name="email"
       value = {context.formSignup.email}
       onChange={e => context.handleInput(e,"formSignup")}
        />
        </Grid>
        <Grid item xs={12}>
      <TextField
       id="cedula"
       label="Cédula Profesional" 
       variant="outlined"
       required
       fullWidth 
       type="text"
       name="cedula"
       value = {context.formSignup.cedula}
       onChange={e => context.handleInput(e,"formSignup")}
       required/>
       </Grid>
       <Grid item xs={12}>
      <TextField 
       id="phone"
       label="Celular"
       variant="outlined"
       required
       fullWidth
       type="Number"
       name="phone"
       value = {context.formSignup.phone}
       onChange={e => context.handleInput(e,"formSignup")}
       required
       />
       </Grid>
       <Grid item xs={12}>
      <TextField
          id="password"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
          variant="outlined"
          name="password"
          onChange={e => context.handleInput(e, "formSignup")}
          value={context.formSignup.password}
        />
        </Grid>
        </Grid>
        <Button type='submit' className={classes.submit} fullWidth variant="contained" color="primary">Crear Cuenta</Button>
        <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                ¿Ya tienes una cuenta? Ingresa
              </Link>
            </Grid>
          </Grid>
    </form>
     )}
    </MyContext.Consumer>
    </div>
    </Container>
  );
}