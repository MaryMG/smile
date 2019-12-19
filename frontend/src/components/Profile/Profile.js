import React, {Component} from 'react';
import {MyContext} from "../../context";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import MY_SERVICE from '../../services/index';
import Avatar from '@material-ui/core/Avatar';
import {StyledProfile} from '../../styles/StyleComponents';

const styleScroll = {
  height: '60vh',
  overflow: 'scroll',
  marginTop: '50px'
  
}
const styleCard ={
  margin: '5px'
}
const styleColor ={
  color: 'gray'
}



export default class Profile extends Component {

  state = {
    posts:[],
    singlePost: {},
    doctors: []
  }

componentDidMount() {
  this.settingPosts() 
}

settingPosts = async () => {
  const posts = await MY_SERVICE.getPosts()
  const doctors = await MY_SERVICE.getDoctors()
  this.setState({posts: posts.data.post, doctors: doctors.data.doctors})
}

submitPost = async (e) => {
  e.preventDefault()
  const {data: post} = await MY_SERVICE.submitPost(this.state.singlePost)
  this.setState(prevState => ({
    ...prevState,
    posts: [post, ...prevState.posts ]
  }))
}

handleInput = (e, obj) => {
  const a = this.state[obj];
  const key = e.target.name;
  a[key] = e.target.value;
  this.setState({ obj: a })
};



render() {
  const {posts} = this.state
  
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
                                 
                                  <StyledProfile>
                                    <>
                                    <div>
                                      <Grid>
                                        <h2>Perfil</h2>
                                      <section className="sectionprojects margen">
                                          <div className="containerimg">
		                                        <div className="d-flex justify-content-center h-100">
			                                          <div clasName="image_outer_container">
				                                            <div className="image_inner_container-salva">
                                                        <img src="/image/logo_smile.png"></img>
			                                       	      </div>
                                                      <div className="profile-usertitle">
				                                                <div className="profile-usertitle-name">
                                                        <h4>Nombre:{context.state.user.username}</h4>
                                                        <h4>Cédula Profesional:<p>{context.state.user.cedula}</p></h4>
                                                         <h4>Télefono:<p>{context.state.user.phone}</p></h4>
					                                              </div>                                                 
			                                              </div> 
		                                                   </div>
	                                                   </div>
                                                     </div>
                                        </section>     
                                      </Grid>
                                    </div>
                                    </>
                                  </StyledProfile>
                                  
                                  );
                                  case "Paciente": return (
                                  <>
                                  <StyledProfile>
                                    <>
                                    <div>
                                      <Grid>
                                        <h2>Perfil</h2>
                                      <section className="sectionprojects">
                                          <div className="containerimg">
		                                        <div className="d-flex justify-content-center h-100">
			                                          <div clasName="image_outer_container">
				                                            <div className="image_inner_container-salva">
                                                        <img src="/image/logo_smile.png"></img>
			                                       	      </div>
                                                      <div className="profile-usertitle">
				                                                <div className="profile-usertitle-name">
                                                        <h3>Nombre:{context.state.user.username}</h3>
                                                        <h3 >Edad:{context.state.user.age}</h3> 
					                                              </div>                                                 
			                                              </div> 
		                                                   </div>
	                                                   </div>
                                                     </div>
                                        </section>     
                                      </Grid>
                                    </div>
                                    </>
                                  </StyledProfile>
            
                                  </>
                                  );
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
                                      <StyledProfile>
                                      <h1>Crear Post</h1>
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
                                                <br/>
                                                <br/>
                                              <TextField
                                              id="description"
                                              label="Descripción" 
                                              variant="outlined"
                                              type="text"
                                              name="description"
                                              onChange={e => this.handleInput(e, "singlePost")}
                                              value={this.state.posts.description}
                                              />
                                              <br/>
                                              <br/>
                                              <Button 
                                              variant="contained"
                                              color="primary"
                                              type='submit'
                                              >Publicar
                                              </Button>
                                          </form>
                                        </div>
                                        </StyledProfile>
                                  </>
                                  );
                                  case "Paciente": return (
                                  <>
                                  <StyledProfile>
                                  <h2>Post</h2>
                                  <div style={styleScroll} >
                                   
                                   {posts.length > 0 ? (
                                      posts.map((post,i) => {
                                        return ( 
                                        <Card key={i} style={ styleCard}>
                                          <h2>{post.title}</h2>
                                          <p>{post.description}</p>
                                        </Card> 
                                        )

                                      })
                                    ): (<div>Loading...</div>)
                                  }
                                   </div>
                                   </StyledProfile> 
                                  </>
                                  );
                                }
                              })()
                            }
                          </Grid>

                          <Grid style={styleScroll} item xs={12} sm={3}>
                           {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   
                                   return (
                                  <> 
                                  <h2>Post</h2>
                                  {posts.length > 0 ? (
                                      posts.map((post,i) => {
                                        return ( 
                                        <Card style={ styleCard} key={i}>
                                          <h2>{post.title}</h2>
                                          <p>{post.description}</p>
                                            
                                        </Card> 
                                        )
                                      })
                                    ): (<div>Loading...</div>)
                                  }
                                  </>
                                  );
                                  case "Paciente": return (  
                                  <>
                                  <h2>Doctores</h2>
                                  <div style={styleScroll}>
                                  { this.state.doctors.map ((doctors, i) => {

                                    return(
                                    <Card key={i} style={ styleCard}> 
                                    <h3>Nombre:<p>{doctors.username}</p></h3>
                                    <h3>Cédula Profesional:<p>{doctors.cedula}</p></h3>
                                    <h3>Cel.<p>{doctors.phone}</p></h3>
                                    </Card>
                                    )})  
                                  }
                                  </div>
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