import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MY_SERVICE from '../../services/index';
import { MyContext } from '../../context';

const styleScroll = {
  height: '60vh',
  overflow: 'scroll',
  marginTop: '50px'
  
}


export default class RegistroPacientes extends Component {
  
  constructor() {
    super()
    this.idUser = React.createRef()
  }

  state = {
    singleRegistro: {
      title: '',
      name: '',
      description:''
    },
    registros: []
   

  }
  
  async componentDidMount () {
    
    const {data} = await MY_SERVICE.getRegistro(this.idUser.current.value)
    
    this.setState({registros: [...this.state.registros, ...data.paciente]})
    
  }
 

  submitRegistro = async (e) => {
    e.preventDefault()
    const {data: singleRegistro} = 
    await MY_SERVICE.submitRegistro(this.state.singleRegistro)
    this.setState({
      registros: [singleRegistro, ...this.state.registros]
    } )
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
            <Grid >
             <form onSubmit={e  => {
              this.submitRegistro (e);
              this.props.history.push('/registro')
              }}>
            
              <Grid tem xs={12} sm={5}>
                <TextField 
                id="title" 
                label="Título" 
                variant="outlined" 
                type="text"
                name="title" 
                fullWidth
                onChange ={e => this.handleInput(e, "singleRegistro")}
                value= {this.state.singleRegistro.title}
                />
                </Grid> 
                <Grid tem xs={12} sm={5}>
                <TextField
                id="name"
                label="Nombre del Paciente" 
                variant="outlined"
                type="text"
                name="name"
                fullWidth
                onChange ={e => this.handleInput(e, "singleRegistro")}
                value ={this.state.singleRegistro.name}
                
                />
                </Grid>
                <Grid tem xs={12} sm={5}>
                <TextField
                id="description"
                label="Descripción" 
                variant="outlined"
                type="text"
                fullWidth
                name="description"
                onChange = {e => this.handleInput (e, "singleRegistro")}
                
                />
                </Grid>
                <Grid tem xs={12} sm={5}>
                <Button 
      
                variant="contained"
                color="primary"
                type='submit'
                >Registrar
                </Button>
                </Grid>
            </form> 
          </Grid>  
            <Grid>
              <Grid tem xs={12} sm={5}>
                  <h2>Pacientes</h2>
                  <input type="hidden" value={context.user._id} ref={ this.idUser } />
                   <div style={styleScroll}  >
                    {this.state.registros.map( (registro, i) =>(
                      <Card key={i} >
                        <h3>Problema:{registro.title}</h3>
                        <h3 >Nombre del Pasiente{registro.name}</h3>
                        <h3>Descripción:{registro.description}</h3>
                      </Card>
                    ) )}
                   </div>
              </Grid>
            </Grid>  

          </main>
      )}
      </MyContext.Consumer>
  
    )
  }
}

RegistroPacientes.contextType = MyContext