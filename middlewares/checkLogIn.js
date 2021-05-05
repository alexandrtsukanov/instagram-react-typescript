const User = require('../db/models/users');
const bcrypt = require('bcrypt');

const checkLogIn = async (req, res, next) => {
  const { login, password } = req.body;
  const userCheckLogin = await User.findOne({ login });
  if (userCheckLogin && (await bcrypt.compare(password, userCheckLogin?.password))) {
    return next()
  } else {
    return res.send('Invalid login or password')
  }
};

module.exports = checkLogIn
