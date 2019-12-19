import React from 'react';
import { makeStyles, hslToRgb } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {MyContext} from "../../context"

const styleLink = {
  textDecoration: 'none'
}
const styleNadbar = {
  backgroundColor :'#f2f5f5',
  
}
const styledImage ={
  width:'80px',
  padding:'2px',
  marginLeft:'10px',
}




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
          <AppBar position="static" style={styleNadbar}  >
            
            <Toolbar>
                <Link to="/">
                  <img style={styledImage} src="/image/logo_smile.png"></img>
                </Link> 
              <Typography  className={classes.title}>
            
                </Typography>
              {context.state.user.role === 'Doctor' && (
                <Link style={styleLink} to="/registro">Registro Pacientes</Link>
              )}
              {context.loggedUser && (
                <Link to="/profile" style={styleLink}>Perfil</Link> 
              )}

              {context.loggedUser && (
                <Link to="/" style={styleLink}>
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
               <Link style={styleLink} to="/login">
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


