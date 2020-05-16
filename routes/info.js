const jwt = require('jsonwebtoken');

const info = function(req, res) {
  if(req.cookies.data) {
    const token = req.cookies.data
    const decoded = jwt.verify(token, 'secretKey');
    res.status(200).send(`${decoded.name}님이 로그인 되어 있습니다.`);
  } else {
    res.status(200).send('로그인을 먼저 해야 합니다.')
  }
}
module.exports = info; 