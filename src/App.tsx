import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import NewPost from './components/NewPost/NewPost';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';
import { useDispatch } from 'react-redux';
import { setUserThunk } from './redux/actionCreators/users';
import { setPostsThunk } from './redux/actionCreators/posts';

const App: React.FunctionComponent = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserThunk());
    dispatch(setPostsThunk());
  }, [])

  return (

    <>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/newpost">
          <NewPost />
        </Route>
        <Route exact path="/user">
          <Profile />
        </Route>
        <Route path="/user/:id">
          <Profile />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
