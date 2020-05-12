const info = async function(req, res) {
  if(req.session.name) { // client가 세션 쿠키를 받지 않았으면 통과되지 않는다.
    res.send(`${req.session.name}님이 로그인 돼 있는 상태입니다.`)
  } else {
    res.send('로그인 돼 있지 않습니다.')
  }
}
module.exports = info;