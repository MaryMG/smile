import React from 'react';
import {MyContext} from "../../context";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';



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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginContainer (props) {
  const classes = useStyles();

    return (
      <Container component="main" maxWidth ="xs">
        <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography> 
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
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
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
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  variant="outlined"
                  name="password"
                  valuevalue={context.loginForm.password}
                  onChange={e => context.handleInput(e, 'loginForm')}
                  /> 
                <Button fullWidth type='submit' variant="contained" className={classes.submit} color="primary">SING IN</Button>
                <Grid container>
                   <Grid item xs>
                    <Link href="#" variant="body2">
                      ¿Olvidaste tu contraseña?
                    </Link>
                   </Grid>
                <Grid item>
                  <Link href="/" variant="body2">
                     {"¿Aún no tienes una cuenta ? Registrate"}
                  </Link>
                </Grid>
                </Grid>
              </form>
          )}
        </MyContext.Consumer> 
      </div>
    </Container> 
   )
}
