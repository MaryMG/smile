(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(95),a(18)),c=a(25),s=a(160),u=a(50),m=a(51);function p(){var e=Object(u.a)(["\nheight:100%vh;\nborder-right: 2px solid #1497d9;\n"]);return p=function(){return e},e}function d(){var e=Object(u.a)(['\nbackground: url("../image/61377.jpg");\nbackground-position: center center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nwidth: 100vw; \nheight:100vh;\npadding: 5px;\nmargin-top: 0px;\n']);return d=function(){return e},e}var g=m.a.div(d()),f=m.a.div(p()),h=a(149),E={background:" linear-gradient(120deg, #f6d365 0%, #fda085 100%)",borderRadius:2,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",textDecoration:"none"},v={textDecoration:"none"};function b(){return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(h.a,{container:!0,spacing:1},r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(i.b,{style:v,to:"/signup"},r.a.createElement(s.a,{style:E,variant:"contained",color:"primary"},"Registro Paciente"))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(i.b,{style:v,to:"/signupsi"},r.a.createElement(s.a,{style:E,variant:"contained",color:"primary"},"Registro Doctor"))))))}var x,y=a(9),w=a.n(y),C=a(28),S=a(29),j=a(33),N=a(30),O=a(34),P=a(79);x="here should be your production endpoint";var D=a.n(P).a.create({withCredentials:!0,baseURL:x}),I={signup:function(e){var t;return w.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,console.log(e),a.next=4,w.a.awrap(D.post("/auth/signup",e));case 4:return t=a.sent,a.abrupt("return",t);case 8:a.prev=8,a.t0=a.catch(0),console.log("error mierdero",a.t0);case 11:case"end":return a.stop()}}),null,null,[[0,8]])},login:function(e){return D.post("/auth/login",e)},getPosts:function(){return D.get("/post")},getDoctors:function(){return D.get("/auth/getDoctors")},getRegistro:function(e){return D.post("/registros",{docId:e})},getUser:function(){return D.get("/profile")},logout:function(){return D.post("/auth/logout")},submitPost:function(e){return D.post("/post",e)},submitRegistro:function(e){return D.post("/registro",e)}},k=a(39),R=a.n(k),W=Object(n.createContext)(),F=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={loggedUser:!1,formSignup:{},loginForm:{email:"",password:""},registros:[],user:{},infoDoctors:{}},a.handleInput=function(e,t){var n=a.state[t];n[e.target.name]=e.target.value,a.setState({obj:n})},a.handleSignup=function(e){var t;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,w.a.awrap(I.signup(a.state.formSignup));case 3:if(!(t=n.sent)){n.next=6;break}return n.abrupt("return",t);case 6:R.a.fire("Welcome ".concat(a.state.formSignup.name),"User created","success");case 7:case"end":return n.stop()}}))},a.handleSignupDoctor=function(e){var t;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,w.a.awrap(I.signup(Object.assign({role:"Doctor"},a.state.formSignup)));case 3:if(!(t=n.sent)){n.next=6;break}return n.abrupt("return",t);case 6:R.a.fire("Welcome ".concat(a.state.formSignup.name),"User created","success");case 7:case"end":return n.stop()}}))},a.handleLogin=function(e,t){e.preventDefault(),I.login(a.state.loginForm).then((function(e){var n=e.data;a.setState({loggedUser:!0,user:n.user}),t()})).catch((function(e){R.a.fire("email o contrase\xf1a incorrecta")}))},a.settingRegistro=function(){var e,t;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.awrap(I.getRegistro(a.state.user._id));case 2:e=n.sent,t=e.data,console.log(t,"data wave",a.state.user._id),a.setState({registros:t.paciente});case 6:case"end":return n.stop()}}))},a.handleLogout=function(e){return w.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.awrap(I.logout());case 2:window.localStorage.clear(),a.setState({loggedUser:!1,user:{}}),e(),a.state.loginForm.email="";case 6:case"end":return t.stop()}}))},a}return Object(O.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.cookie&&I.getUser().then((function(t){var a=t.data;e.setState({loggedUser:!0,user:a.user}),R.a.fire("Welcome back ".concat(a.user.name," "),"","success")})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.registros),r.a.createElement(W.Provider,{value:{loggedUser:this.state.loggedUser,formSignup:this.state.formSignup,loginForm:this.state.loginForm,handleInput:this.handleInput,handleSignup:this.handleSignup,handleSignupDoctor:this.handleSignupDoctor,handleLogin:this.handleLogin,handleLogout:this.handleLogout,user:this.state.user,state:this.state,settingPosts:this.settingPosts,registros:this.state.registros,settingRegistro:this.settingRegistro}},this.props.children)}}]),t}(n.Component),U=a(80),L=a(159),_=a(121),q=a(153),T=a(154),A=a(155),B=a(31),G=a.n(B),M=a(161),V=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(e){var t=V();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(M.a,{className:t.avatar},r.a.createElement(G.a,null)),r.a.createElement(_.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(W.Consumer,null,(function(a){return r.a.createElement("form",{onSubmit:function(t){a.handleLogin(t,(function(){e.history.push("/profile")}))},className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(L.a,{id:"email",label:"Correo",variant:"outlined",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,type:"email",name:"email",value:a.loginForm.email,onChange:function(e){return a.handleInput(e,"loginForm")}}),r.a.createElement(L.a,{id:"password",label:"Contrase\xf1a",type:"password",autoComplete:"current-password",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,variant:"outlined",name:"password",valuevalue:a.loginForm.password,onChange:function(e){return a.handleInput(e,"loginForm")}}),r.a.createElement(s.a,{fullWidth:!0,type:"submit",variant:"contained",className:t.submit,color:"primary"},"SING IN"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(q.a,{href:"#",variant:"body2"},"\xbfOlvidaste tu contrase\xf1a?")),r.a.createElement(h.a,{item:!0},r.a.createElement(q.a,{href:"/",variant:"body2"},"\xbfA\xfan no tienes una cuenta ? Registrate"))))}))))}var Y=a(20),z=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function $(e){var t=z();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(M.a,{className:t.avatar},r.a.createElement(G.a,null)),r.a.createElement(W.Consumer,null,(function(a){var n;return r.a.createElement("form",{onSubmit:function(t){a.handleSignup(t),e.history.push("/login")},className:t.form,noValidate:!0},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"username",label:"Nombre Completo",variant:"outlined",autoComplete:"fname",required:!0,fullWidth:!0,autoFocus:!0,type:"text",name:"username",value:a.formSignup.username,onChange:function(e){return a.handleInput(e,"formSignup")}})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"age",label:"Edad",variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,type:"Number",name:"age",value:a.formSignup.age,onChange:function(e){return a.handleInput(e,"formSignup")}})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,(n={id:"email",label:"Correo",variant:"outlined",autoComplete:"email",required:!0,fullWidth:!0,type:"email",name:"email"},Object(Y.a)(n,"autoComplete","email"),Object(Y.a)(n,"value",a.formSignup.email),Object(Y.a)(n,"onChange",(function(e){return a.handleInput(e,"formSignup")})),n))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"password",label:"Contrase\xf1a",type:"password",autoComplete:"current-password",required:!0,fullWidth:!0,variant:"outlined",name:"password",onChange:function(e){return a.handleInput(e,"formSignup")},value:a.formSignup.password}))),r.a.createElement(s.a,{type:"submit",className:t.submit,fullWidth:!0,variant:"contained",color:"primary"},"Crear Cuenta"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(q.a,{href:"/login",variant:"body2"},"\xbfYa tienes una cuenta? Ingresa"))))}))))}var H=Object(U.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function K(e){var t=H();return r.a.createElement(T.a,{component:"main",maxWidth:"xs"},r.a.createElement(A.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(M.a,{className:t.avatar},r.a.createElement(G.a,null)),r.a.createElement(W.Consumer,null,(function(a){return r.a.createElement("form",{onSubmit:function(t){a.handleSignupDoctor(t),e.history.push("/login")},className:t.form,noValidate:!0},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"username",label:"Nombre Completo",variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,type:"text",name:"username",value:a.formSignup.username,onChange:function(e){return a.handleInput(e,"formSignup")}})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"email",label:"Correo",variant:"outlined",autoComplete:"email",required:!0,fullWidth:!0,type:"email",name:"email",value:a.formSignup.email,onChange:function(e){return a.handleInput(e,"formSignup")}})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,Object(Y.a)({id:"cedula",label:"C\xe9dula Profesional",variant:"outlined",required:!0,fullWidth:!0,type:"text",name:"cedula",value:a.formSignup.cedula,onChange:function(e){return a.handleInput(e,"formSignup")}},"required",!0))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,Object(Y.a)({id:"phone",label:"Celular",variant:"outlined",required:!0,fullWidth:!0,type:"Number",name:"phone",value:a.formSignup.phone,onChange:function(e){return a.handleInput(e,"formSignup")}},"required",!0))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(L.a,{id:"password",label:"Contrase\xf1a",type:"password",autoComplete:"current-password",required:!0,fullWidth:!0,variant:"outlined",name:"password",onChange:function(e){return a.handleInput(e,"formSignup")},value:a.formSignup.password}))),r.a.createElement(s.a,{type:"submit",className:t.submit,fullWidth:!0,variant:"contained",color:"primary"},"Crear Cuenta"),r.a.createElement(h.a,{container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(q.a,{href:"/login",variant:"body2"},"\xbfYa tienes una cuenta? Ingresa"))))}))))}var Q=a(37),X=a(81),Z=a(156),ee={height:"60vh",overflow:"scroll",marginTop:"50px"},te={margin:"5px"},ae=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(j.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],singlePost:{},doctors:[]},a.settingPosts=function(){var e,t;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.awrap(I.getPosts());case 2:return e=n.sent,n.next=5,w.a.awrap(I.getDoctors());case 5:t=n.sent,a.setState({posts:e.data.post,doctors:t.data.doctors});case 7:case"end":return n.stop()}}))},a.submitPost=function(e){var t,n;return w.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),r.next=3,w.a.awrap(I.submitPost(a.state.singlePost));case 3:t=r.sent,n=t.data,a.setState((function(e){return Object(X.a)({},e,{posts:[n].concat(Object(Q.a)(e.posts))})}));case 6:case"end":return r.stop()}}))},a.handleInput=function(e,t){var n=a.state[t];n[e.target.name]=e.target.value,a.setState({obj:n})},a}return Object(O.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.settingPosts()}},{key:"render",value:function(){var e=this,t=this.state.posts;return r.a.createElement(W.Consumer,null,(function(a){return r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12,sm:3},function(){switch(a.state.user.role){case"Doctor":return r.a.createElement(f,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Perfil"),r.a.createElement("section",{className:"sectionprojects margen"},r.a.createElement("div",{className:"containerimg"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{clasName:"image_outer_container"},r.a.createElement("div",{className:"image_inner_container-salva"},r.a.createElement("img",{src:"/image/logo_smile.png"})),r.a.createElement("div",{className:"profile-usertitle"},r.a.createElement("div",{className:"profile-usertitle-name"},r.a.createElement("h4",null,"Nombre:",a.state.user.username),r.a.createElement("h4",null,"C\xe9dula Profesional:",r.a.createElement("p",null,a.state.user.cedula)),r.a.createElement("h4",null,"T\xe9lefono:",r.a.createElement("p",null,a.state.user.phone))))))))))));case"Paciente":return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("h2",null,"Perfil"),r.a.createElement("section",{className:"sectionprojects"},r.a.createElement("div",{className:"containerimg"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{clasName:"image_outer_container"},r.a.createElement("div",{className:"image_inner_container-salva"},r.a.createElement("img",{src:"/image/logo_smile.png"})),r.a.createElement("div",{className:"profile-usertitle"},r.a.createElement("div",{className:"profile-usertitle-name"},r.a.createElement("h3",null,"Nombre:",a.state.user.username),r.a.createElement("h3",null,"Edad:",a.state.user.age))))))))))))}}(),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0        \xa0",r.a.createElement(h.a,{item:!0,xs:12,sm:3},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",function(){switch(a.state.user.role){case"Doctor":return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement("h1",null,"Crear Post"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){e.submitPost(t),e.props.history.push("/profile")}},r.a.createElement(L.a,{id:"title",label:"T\xedtulo",variant:"outlined",type:"text",name:"title",onChange:function(t){return e.handleInput(t,"singlePost")},value:e.state.posts.title}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(L.a,{id:"description",label:"Descripci\xf3n",variant:"outlined",type:"text",name:"description",onChange:function(t){return e.handleInput(t,"singlePost")},value:e.state.posts.description}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"contained",color:"primary",type:"submit"},"Publicar")))));case"Paciente":return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement("h2",null,"Post"),r.a.createElement("div",{style:ee},t.length>0?t.map((function(e,t){return r.a.createElement(Z.a,{key:t,style:te},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description))})):r.a.createElement("div",null,"Loading..."))))}}(),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement(h.a,{style:ee,item:!0,xs:12,sm:3},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",function(){switch(a.state.user.role){case"Doctor":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Post"),t.length>0?t.map((function(e,t){return r.a.createElement(Z.a,{style:te,key:t},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description))})):r.a.createElement("div",null,"Loading..."));case"Paciente":return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Doctores"),r.a.createElement("div",{style:ee},e.state.doctors.map((function(e,t){return r.a.createElement(Z.a,{key:t,style:te},r.a.createElement("h3",null,"Nombre:",r.a.createElement("p",null,e.username)),r.a.createElement("h3",null,"C\xe9dula Profesional:",r.a.createElement("p",null,e.cedula)),r.a.createElement("h3",null,"Cel.",r.a.createElement("p",null,e.phone)))}))))}}(),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))}))}}]),t}(n.Component);ae.contextType=W;var ne=a(157),re=a(158),le={textDecoration:"none"},oe={backgroundColor:"#f2f5f5"},ie={width:"80px",padding:"2px",marginLeft:"10px"},ce=Object(U.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function se(e){var t=ce();return r.a.createElement(W.Consumer,null,(function(e){return r.a.createElement("div",{className:t.root},r.a.createElement(ne.a,{position:"static",style:oe},r.a.createElement(re.a,null,r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{style:ie,src:"/image/logo_smile.png"})),r.a.createElement(_.a,{className:t.title}),"Doctor"===e.state.user.role&&r.a.createElement(i.b,{style:le,to:"/registro"},"Registro Pacientes"),e.loggedUser&&r.a.createElement(i.b,{to:"/profile",style:le},"Perfil"),e.loggedUser&&r.a.createElement(i.b,{to:"/",style:le},r.a.createElement(s.a,{onClick:function(){return e.handleLogout((function(){}))}},"LogOut")),!e.loggedUser&&r.a.createElement(i.b,{style:le,to:"/login"},r.a.createElement(s.a,{variant:"contained",color:"primary"},"Login")))))}))}var ue={height:"60vh",overflow:"scroll",marginTop:"50px"},me=function(e){function t(){var e;return Object(C.a)(this,t),(e=Object(j.a)(this,Object(N.a)(t).call(this))).state={singleRegistro:{title:"",name:"",description:""},registros:[]},e.submitRegistro=function(t){var a,n;return w.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.next=3,w.a.awrap(I.submitRegistro(e.state.singleRegistro));case 3:a=r.sent,n=a.data,e.setState({registros:[n].concat(Object(Q.a)(e.state.registros))});case 6:case"end":return r.stop()}}))},e.handleInput=function(t,a){var n=e.state[a];n[t.target.name]=t.target.value,e.setState({obj:n})},e.idUser=r.a.createRef(),e}return Object(O.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e,t;return w.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.awrap(I.getRegistro(this.idUser.current.value));case 2:e=a.sent,t=e.data,this.setState({registros:[].concat(Object(Q.a)(this.state.registros),Object(Q.a)(t.paciente))});case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return r.a.createElement(W.Consumer,null,(function(t){return r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement("form",{onSubmit:function(t){e.submitRegistro(t),e.props.history.push("/registro")}},r.a.createElement(h.a,{tem:!0,xs:12,sm:5},r.a.createElement(L.a,{id:"title",label:"T\xedtulo",variant:"outlined",type:"text",name:"title",fullWidth:!0,onChange:function(t){return e.handleInput(t,"singleRegistro")},value:e.state.singleRegistro.title})),r.a.createElement(h.a,{tem:!0,xs:12,sm:5},r.a.createElement(L.a,{id:"name",label:"Nombre del Paciente",variant:"outlined",type:"text",name:"name",fullWidth:!0,onChange:function(t){return e.handleInput(t,"singleRegistro")},value:e.state.singleRegistro.name})),r.a.createElement(h.a,{tem:!0,xs:12,sm:5},r.a.createElement(L.a,{id:"description",label:"Descripci\xf3n",variant:"outlined",type:"text",fullWidth:!0,name:"description",onChange:function(t){return e.handleInput(t,"singleRegistro")}})),r.a.createElement(h.a,{tem:!0,xs:12,sm:5},r.a.createElement(s.a,{variant:"contained",color:"primary",type:"submit"},"Registrar")))),r.a.createElement(h.a,null,r.a.createElement(h.a,{tem:!0,xs:12,sm:5},r.a.createElement("h2",null,"Pacientes"),r.a.createElement("input",{type:"hidden",value:t.user._id,ref:e.idUser}),r.a.createElement("div",{style:ue},e.state.registros.map((function(e,t){return r.a.createElement(Z.a,{key:t},r.a.createElement("h3",null,"Problema:",e.title),r.a.createElement("h3",null,"Nombre del Pasiente",e.name),r.a.createElement("h3",null,"Descripci\xf3n:",e.description))}))))))}))}}]),t}(n.Component);me.contextType=W;var pe=function(){return r.a.createElement(i.a,null,r.a.createElement(se,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:b}),r.a.createElement(c.a,{exact:!0,path:"/signup",component:$}),r.a.createElement(c.a,{exact:!0,path:"/signupsi",component:K}),r.a.createElement(c.a,{exact:!0,path:"/login",component:J}),r.a.createElement(c.a,{exact:!0,path:"/profile",component:ae}),r.a.createElement(c.a,{exact:!0,path:"/registro",component:me})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,a){e.exports=a(120)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.7242e72f.chunk.js.map