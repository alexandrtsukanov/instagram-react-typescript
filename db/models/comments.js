const mongoose = require('mongoose');

mongoose.pluralize(null);

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.ObjectId,
    ref: 'users',
  },
  entry: String,
  post: {
    type: mongoose.ObjectId,
    ref: 'posts',
  },
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment
