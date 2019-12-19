import React, { Component, createContext } from "react";
import MY_SERVICE from "./services/index";
import Swal from "sweetalert2";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {},
    loginForm: {
      email: "",
      password: ""
    },
    registros:[],
    user: {},
    infoDoctors:{}
  };
  
  componentDidMount() {
    
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user });
          Swal.fire(`Welcome back ${data.user.name} `, "", "success");
        })
        .catch(err => console.log(err));
    }
  }

  handleInput = (e, obj) => {
    const a = this.state[obj];
    const key = e.target.name;
    a[key] = e.target.value;
    this.setState({ obj: a });
    
  };
 
  handleSignup = async e => {
    e.preventDefault();
    let signedUser = await MY_SERVICE.signup(this.state.formSignup)
    if (signedUser) {
      return signedUser
    }
    Swal.fire(`Welcome ${this.state.formSignup.name}`, "User created", "success")
  };

  handleSignupDoctor = async e => {
    e.preventDefault();
    let signedUser = await MY_SERVICE.signup(Object.assign({role: 'Doctor'}, this.state.formSignup))
    if (signedUser) {
      return signedUser
    }
    Swal.fire(`Welcome ${this.state.formSignup.name}`, "User created", "success")
  };

  handleLogin = (e, cb) => {
    e.preventDefault();
    MY_SERVICE.login(this.state.loginForm)
    .then(({ data }) => {
      this.setState({ loggedUser: true, user: data.user })
      cb()
    })
    .catch(err => {
      Swal.fire('email o contraseña incorrecta')
    });
  };
  settingRegistro = async () => {
    
      const {data} = await MY_SERVICE.getRegistro(this.state.user._id)
      console.log(data, "data wave", this.state.user._id)
      this.setState({registros: data.paciente})
    }

  handleLogout = async cb => {
    await MY_SERVICE.logout();
    window.localStorage.clear();
    this.setState({ loggedUser: false, user: {} });
    cb();
    this.state.loginForm.email = ''
    
  };

  render() {
    console.log(this.state.registros)
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleSignupDoctor: this.handleSignupDoctor,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          user: this.state.user,
          state: this.state,
          settingPosts: this.settingPosts,
          registros: this.state.registros,
          settingRegistro: this.settingRegistro
        
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
