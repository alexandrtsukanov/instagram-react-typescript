const mongoose = require('mongoose');

mongoose.pluralize(null);

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: String,
  posts: [{
    type: mongoose.ObjectId,
    ref: 'posts'
  }],
});

const User = mongoose.model('users', userSchema);

module.exports = User
