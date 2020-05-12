const { User } = require('../models/index');

const signout = async function(req, res) {
  if(req.session.name) {
    req.session.destroy(err => {
      if(err) {
        console.log(err);
      } else {
        res.status(200).send('로그아웃 됐습니다.')
      }
    });
  } else {
    res.status(200).send('이미 로그아웃 돼 있습니다.')
  }
}
module.exports = signout;