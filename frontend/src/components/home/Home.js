import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import {StyledImage} from "../../styles/StyleComponents"


export default function Home() {
  return (

    <div >
     <StyledImage>
      <p>wertyuiopasdfghjklñlzxcvbnm,</p>
      <Link to="/signup"><Button variant="contained" color="primary">Paciente</Button></Link>
      <Link to="/signupsi"><Button variant="contained" color="primary">Psicologo</Button></Link>
      <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
      </StyledImage>
      </div>
    
  
    
  );
}



