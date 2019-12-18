require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require("express-session");
const MongoStore   = require('connect-mongo')(session);
//const flash        = require("connect-flash");
const passport     = require('./config/passport');
const cors         = require('cors');
    

mongoose
  .connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
       process.env.FRONTEND_POINT
    ]
  })
)

app.use(
  session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))

app.use(passport.initialize())
app.use(passport.session())



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// Enable authentication using session + passport

const index = require('./routes/index');
const auth = require('./routes/auth');
const indexPost = require('./routes/index.post');
const registro = require ('./routes/registro_pacientes');
app.use('/api/', index);
app.use('/api/auth', auth);
app.use('/api/',indexPost)
app.use('/api/',registro)





      

module.exports = app;
