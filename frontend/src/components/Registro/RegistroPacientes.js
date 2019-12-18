import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MY_SERVICE from '../../services/index';
import { MyContext } from '../../context';


export default class RegistroPacientes extends Component {

  state = {
    singleRegistro: {
      title: '',
      name: '',
      description:''
    },
    registros: []
   

  }
  componentDidMount =  async () => {
    const papas = await this.context.settingRegistro()
    this.setState({registros:papas})
  }
  // settingRegistro = async () => {
  //   const registros = await MY_SERVICE.getRegistro()
  //   console.log(registros)
  //   this.setState({registros: registros.data.registro})
  // }

  submitRegistro = async (e) => {
    e.preventDefault()
    const {data: singleRegistro} = 
    await MY_SERVICE.submitRegistro(this.state.singleRegistro)
    this.setState(prevState => ({
      ...prevState,
      registros: [singleRegistro, ...this.state.registros]
    }))
  }

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a })
  };

  
  render(){
    return (
      <MyContext.Consumer>
        {context=> (
          <main>
             <form onSubmit={e  => {
              this.submitRegistro (e);
              this.props.history.push('/registro')
              }}>
          
              <Grid tem xs={12} sm={6}>
                <div>
                <TextField 
                id="title" 
                label="Título" 
                variant="outlined" 
                type="text"
                name="title" 
                onChange ={e => this.handleInput(e, "singleRegistro")}
                value= {this.state.singleRegistro.title}
                
                />
                <TextField
                id="name"
                label="Nombre del Paciente" 
                variant="outlined"
                type="text"
                name="name"
                onChange ={e => this.handleInput(e, "singleRegistro")}
                value ={this.state.singleRegistro.name}
                
                />
                <TextField
                id="description"
                label="Descripción" 
                variant="outlined"
                type="text"
                name="description"
                onChange = {e => this.handleInput (e, "singleRegistro")}
                
                />
                <Button 
                variant="contained"
                color="primary"
                type='submit'
                >Registrar
                </Button>
              </div> 
            </Grid> 
            
           
            </form>  
            <Grid>
              <Grid tem xs={12} sm={6}>
                
                  <h2>Pacientes</h2>
                  {context.registros.map((registro, i) =>(
                      <Card key={i}>
                        <h3>Problema:{registro.title}</h3>
                        <h3 >Nombre del Pasiente{registro.name}</h3>
                        <h3>Descripción:{registro.description}</h3>
                      </Card>
                    ))}
                
              </Grid>
            </Grid>   
          </main>
      )}
      </MyContext.Consumer>
  
    )
  }
}

RegistroPacientes.contextType = MyContext