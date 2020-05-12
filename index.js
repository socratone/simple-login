const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');
const infoRoute = require('./routes/info');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/signup', signupRoute);
app.use('/signin', signinRoute);
app.use('/info', infoRoute);

app.listen(3000, () => console.log('서버가 3000 port에서 가동 중입니다.'));