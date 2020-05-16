const { User } = require('../models/index');
const jwt = require('jsonwebtoken');

const signin = async function(req, res) {
  const { email, password } = req.body;
  const user = await User.findAll({
    where: { email, password }
  });

  if(user.length < 1) {
    res.status(404).send('이메일이나 암호가 틀렸습니다.')
  } else {
    const data = user[0].dataValues;
    var token = jwt.sign({ name: data.name }, 'secretKey');
    res.cookie('data', token);
    res.status(200).send(`${user[0].dataValues.name}님 환영합니다.`);
  }
}
module.exports = signin;