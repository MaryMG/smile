import React from 'react';
import styled from "styled-components";
import {MyContext} from "../../context";
//import { Link } from "react-router-dom";

const ProfileTag = styled.form`
  
`;
export default function Profile(props) {

    return (
        <MyContext.Consumer>
            {context => (
                <ProfileTag
                
                    onSubmit={e => {
                        context.handleUpload(e);
                        // props.history.push("/login");
                    }}>
                      <section className="container">
                        <div className="holder">
                          <div className="wrapPanel">
                          <div className="perfil">
                            {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   return (
                                  <>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Cédula Profecional:{context.state.user.cedula}</h3>
                                  <h3>Télefono:{context.state.user.phone}</h3>
                                  <h3>Especialidad:{context.state.user.username}</h3>
                                  </>
                                  );
                                  case "Paciente": return (
                                  <>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Edad:{context.state.user.age}</h3> 
                                  </>);
                                }
                              })()
                            }
                          </div>
                            <div className="post">

                            </div>
                            <div className="doctor">
                            {
                              (() => {
                                switch (context.state.user.role) {
                                  case "Doctor":   return "";
                                  case "Paciente": return (
                                  <>
                                  <div>
                                  <h3>Nombre:{context.state.user.username}</h3>
                                  <h3 >Cédula Profesional:{context.state.user.cedula}</h3>
                                  <h3>Télefono:{context.state.user.phone}</h3>
                                  <h3>Especialidad:{context.state.user.username}</h3>
                                  </div>
                                  </>);
                                }
                              })()
                            }
                            </div>

                          </div>
                        </div>
                      </section>
                </ProfileTag>
            )}
        </MyContext.Consumer>
    );
}


