const mongoose = require('mongoose');
const Comment = require('../models/comments');

mongoose.pluralize(null);

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.ObjectId,
    ref: 'users',
  },
  photoUrl: String,
  entry: String,
  likers: [{
    type: mongoose.ObjectId,
    ref: 'users',
  }],
  comments: [{
    type: mongoose.ObjectId,
    ref: Comment,
  }],
  date: Date,
});

const Post = mongoose.model('posts', postSchema);

module.exports = Post
