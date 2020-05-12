const { User } = require('../models/index');

const signin = async function(req, res) {
  const { email, password } = req.body;
  const user = await User.findAll({
    where: { email, password }
  });

  if(user.length < 1) return res.status(404).send('이메일이나 암호가 틀렸습니다.')
  const name = 'receivedSessionId';
  req.session.name = name;
  res.status(200).send(`${name}님 환영합니다.`);
}
module.exports = signin;