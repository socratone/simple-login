const { User } = require('../models/index')

const signup = async function(req, res) {
  // console.log('what is the req.body', req.body)
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.status(200).send({ name, email, password });
}
module.exports = signup;