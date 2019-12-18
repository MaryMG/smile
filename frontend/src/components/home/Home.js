import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";
import {StyledImage} from "../../styles/StyleComponents"

const style = {
  background: ' linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export default function Home() {
  return (

    <div >
     <StyledImage>
     
      <Link to="/signup"><Button style={style} variant="contained" color="primary">Paciente</Button></Link>
      <Link to="/signupsi"><Button variant="contained" color="primary">Psicologo</Button></Link>
     
      </StyledImage>
      </div>
    
  
    
  );
}



