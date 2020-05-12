const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
// const cookieParser = require('cookie-parser')

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const infoRoute = require('./routes/info');
const signoutRoute = require('./routes/signout');

app.use(cors());
app.use(bodyParser.json());

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'secretedstring',
  resave: false,
  saveUninitialized: true,
  name: 'sessionId',
  // cookie: { secure: true }
}));

// app.use(cookieParser());

app.use('/signup', signupRoute);
app.use('/signin', signinRoute);
app.use('/info', infoRoute);
app.use('/signout', signoutRoute);

app.listen(3000, () => console.log('서버가 3000 port에서 가동 중입니다.'));