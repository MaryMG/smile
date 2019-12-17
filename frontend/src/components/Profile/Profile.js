import React, {Component} from 'react';
//import styled from "styled-components";
import {MyContext} from "../../context";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MY_SERVICE from '../../services/index';

export default class Profile extends Component {

  state = {
    posts:[],
    singlePost: {}
  }

componentDidMount() {
  this.settingPosts()
}

settingPosts = async () => {
  const posts = await MY_SERVICE.getPosts()
  this.setState({posts: posts.data.post})
  console.log(this.state.posts)
}

submitPost = async (e) => {
  e.preventDefault()
  const post = await MY_SERVICE.submitPost(this.state.singlePost)
  this.setState({posts: {...this.state.posts, post}})
  console.log(this.state.posts)
}

handleInput = (e, obj) => {
  const a = this.state[obj];
  const key = e.target.name;
  a[key] = e.target.value;
  this.setState({ obj: a })
};





render() {
    return (
        <MyContext.Consumer>
            {context => (
                      <Grid container >
                          <Grid item xs={12} sm={3}>
                            {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   
                                   return (
                                  <>
                                  <div>
                                    <h1>Perfil</h1>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Cédula Profesional:{context.state.user.cedula}</h3>
                                  <h3>Télefono:{context.state.user.phone}</h3>
                                  <h3>Especialidad:{context.state.user.username}</h3>
                                  </div>
                                  
                                  <div>
                                  
                                  <Button variant="contained" color="primary">Registro de Pacientes</Button>
                                    
                                  </div>
                                  </>
                                  );
                                  case "Paciente": return (
                                  <>
                                  <h1>Perfil</h1>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Edad:{context.state.user.age}</h3> 
                                  
                                  </>
                                  );
                                }
                              })()
                            }
                          </Grid>   
                          <Grid item xs={12} sm={3}>
                               <h1>Crear Post</h1>
                             {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   
                                    return (
                                      <>
                                        <div>
                                          <form onSubmit={e => {
                                            this.submitPost(e); 
                                              this.props.history.push('/profile')
                                            }}>
                                              <TextField 
                                                id="title" 
                                                label="Título" 
                                                variant="outlined" 
                                                type="text"
                                                name="title" 
                                                onChange={e => this.handleInput(e, "singlePost")}
                                                value={this.state.posts.title}
                                              />
                                       <TextField
                                       id="description"
                                       label="Descripción" 
                                       variant="outlined"
                                       type="text"
                                       name="description"
                                       onChange={e => this.handleInput(e, "singlePost")}
                                       value={this.state.posts.description}
                                        />
                                  <Button 
                                   variant="contained"
                                   color="primary"
                                   type='submit'
                                   >Publicar
                                  </Button>
                                  
                                  
                            </form>
                            </div>
                                  </>
                                  );
                                  case "Paciente": return (
                                  <>
                                  <h2>Post</h2>  
                                  </>);
                                }
                              })()
                            }
                          </Grid>

                          <Grid item xs={12} sm={3}>
                           {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   
                                   return (
                                  <>
                                 <div>
                                    <Card >
                                   {  this.state.posts ? ( this.state.posts.map((post,i) => {
                                     return  <CardContent key={i}>
                                          <h2>{post.title}</h2>
                                          <p>{post.description}</p>
                                      </CardContent>
                                       }) ): (<div>Loading...</div>)   }  
                                       
                                           <CardActions>
                                             <Button size="small">Actualizar</Button>
                                             <Button size="small">Eliminar</Button>
                                           </CardActions>    
                                    </Card>
                                    
                                  </div>
                                  </>
                                  );
                                  case "Paciente": return (  
                                  <>
                                  <h1>Doctores</h1>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Edad:{context.state.user.age}</h3> 
                                  </>);
                                }
                              })()
                            }
                          </Grid>
                      </Grid>
            )}
        </MyContext.Consumer>
    );
  }
}


Profile.contextType = MyContext