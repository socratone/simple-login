const { User } = require('../models/index');

const info = async function(req, res) {
  if(req.session.name === 'receivedSessionId') {
    res.send('사용자의 정보를 보여 드리겠습니다.')
  } else {
    res.send('사용자가 아닙니다.')
  }
}
module.exports = info;