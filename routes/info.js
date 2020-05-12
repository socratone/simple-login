const { User } = require('../models/index');

const info = async function(req, res) {

  console.log('들어온 쿠키는 다음과 같습니다.', req.cookie);
  res.send('쿠키 전송')
  // if(req.session.key === 'temporaryReceivedSessionId') {
  //   res.send('사용자의 정보를 보여 드리겠습니다.')
  // } else {
  //   res.send('사용자가 아닙니다.')
  // }
}
module.exports = info;git 