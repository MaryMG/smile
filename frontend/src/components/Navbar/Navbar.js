import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {MyContext} from "../../context"



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <MyContext.Consumer> 
      {context =>{
        return (
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                <Link to="/">Smile</Link>   
              </Typography>
              {context.state.user.role === 'Doctor' && (
                <Link to="/registro">Registro Pacientes</Link>
              )}
              {context.loggedUser && (
                <Link to="/profile">Perfil</Link> 
              )}

              {context.loggedUser && (
                <Link to="/">
                <Button 
                onClick = {() => 
                  context.handleLogout(() => { 
                  })
                }
                >LogOut
                </Button>
                </Link>
               
              )}
               {!context.loggedUser && (
               <Link to="/login">
                 <Button variant="contained" color="primary">
                   Login</Button>
                   </Link>
              
               
              )}
            </Toolbar>
          </AppBar>
        </div>
        )
      }}
   
    </MyContext.Consumer>
  );
}


