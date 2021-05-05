const User = require('../db/models/users');

const checkSignUp = async (req, res, next) => {
  const { login, email, password, avatar } = req.body;
  const userCheckEmail = await User.findOne({ email });
  if (userCheckEmail) {
    return res.send('User with such email has already signed up')
  };
  const userCheckLogin = await User.findOne({ login });
  if (userCheckLogin) {
    return res.send('This login is already in use')
  };
  next();
};

module.exports = checkSignUp


