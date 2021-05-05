const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../db/models/users');
const checkSignUp = require('../middlewares/checkSignUp');
const checkLogIn = require('../middlewares/checkLogIn');

const saltRound = 10;
const router = express.Router();

router.post('/signup', checkSignUp, async (req, res) => {
  try {
    const { login, password, email, avatar } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const newUser = new User({ login, password: hashedPassword, email, avatar, posts: [] });
    await newUser.save();
    const newUserPopulated = await User.findById(newUser._id).populate('posts');
    req.session.user = newUser;
    return res.status(200).json(newUserPopulated);
  } catch(e) {
    console.log(e);
    return res.status(404).send(e);
  };
});

router.post('/login', checkLogIn, async (req, res) => {
  try {
    const { login, password } = req.body;
    const userToLogin = await User.findOne({ login }).populate('posts');
    req.session.user = userToLogin;
    return res.status(200).json(userToLogin);
  } catch(e) {
    return res.status(404).send(e);
  };
});

router.get('/auth', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session?.user?._id).populate('posts');
    if (currentUser) {
      return res.status(200).json(currentUser);
    }
    return res.status(200).json(null);
  } catch(e) {
    console.log(e);
    return res.status(404).send(e);
  };
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('sid');
    return res.sendStatus(200);
  } catch(e) {
    return res.status(404).send(e);
  };
});

module.exports = router
