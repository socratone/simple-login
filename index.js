const express = require('express');
const app = express();
const cors = require('cors');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');

app.use(cors());

app.use('/signup', signupRoute);
app.use('/signin', signinRoute);

app.listen(3000, () => console.log('서버가 3000 port에서 가동 중입니다.'));