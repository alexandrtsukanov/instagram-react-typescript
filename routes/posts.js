const express = require('express');
const Post = require('../db/models/posts');
const User = require('../db/models/users');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.find().populate('author').populate('likers').populate('comments');
    return res.status(200).json(allPosts);
  } catch(e) {
    console.log(e)
    return res.status(404).send(e);
  }
});

router.post('/newpost', async (req, res) => {
  try {
    const { photoUrl, entry } = req.body;
    const newPost = new Post({
      author: req.session?.user?._id,
      photoUrl,
      entry,
      likers: [],
      comments: [],
      date: new Date(),
    });
    await newPost.save();
    const newPostPopulated = await Post.findById(newPost._id).populate('author').populate('likers').populate('comments');
    const userToAddPost = await User.findById(req.session?.user?._id);
    userToAddPost.posts.push(newPost._id);
    await userToAddPost.save();
    return res.status(200).json(newPostPopulated);
  } 
  catch(e) {
    return res.status(404).send(e);
  };
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    const userToDeletePost = await User.findById(req.session?.user?._id);
    userToDeletePost.posts.splice(userToDeletePost.posts.indexOf(req.params?.id), 1);
    await userToDeletePost.save();
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  };
});

router.post('/edit/:id', async (req, res) => {
  try {
    const { entry } = req.body;
    await Post.findOneAndUpdate({ _id: req.params.id }, { entry });
    const userToEditPost = await User.findById(req.session?.user?._id);
    await User.findOneAndUpdate({ _id: req.session.user._id }, { posts: userToEditPost.posts.map(el => el._id === req.params.id ? {...el, entry: entry } : el) });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.status(404).send(e);
  };
});
 
module.exports = router
