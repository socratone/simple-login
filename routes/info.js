const info = function(req, res) {
  res.status(200).send(req.cookies.data);
}
module.exports = info; 