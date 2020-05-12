const { User } = require('../models/index');

const signin = async function(req, res) {
  const { email, password } = req.body;
  const user = await User.findAll({
    where: { email, password }
  });

  if(user.length < 1) {
    res.status(404).send('이메일이나 암호가 틀렸습니다.')
  } else {
    const data = user[0].dataValues;
    req.session.name = data.name; // 세션 쿠키를 보내준다.
    res.status(200).send(`${user[0].dataValues.name}님 환영합니다.`);
  }
}
module.exports = signin;