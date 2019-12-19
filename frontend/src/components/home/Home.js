import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import {StyledImage} from "../../styles/StyleComponents"
import { Grid } from '@material-ui/core';


const style = {
  background: ' linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  borderRadius: 2,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  textDecoration: 'none',
};
const styleLink = {
  textDecoration: 'none'
}


export default function Home() {
  return (

    <div >
     <StyledImage>

       
       <Grid container spacing={1}>
      <Grid item xs={3}>
      </Grid> 
      <Grid item xs={3}>
      <Link style={styleLink} to="/signup"><Button style={style} variant="contained" color="primary">Registro Paciente</Button></Link>
      </Grid> 
      <Grid item xs={3}>
      <Link style={styleLink} to="/signupsi"><Button style={style}  variant="contained" color="primary">Registro Psicologo</Button></Link>
      </Grid> 
      <Grid item xs={3}>
      </Grid> 
      </Grid> 
  
     
      </StyledImage>
      </div>
    
  
    
  );
}



