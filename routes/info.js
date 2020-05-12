const info = async function(req, res) {
  if(req.session.name) {
    res.send(`${req.session.name}님이 로그인 돼 있습니다.`)
  } else {
    res.send('사용자가 아닙니다.')
  }
}
module.exports = info;