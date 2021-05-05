import React, { useEffect } from 'react';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPostsThunk } from '../../redux/actionCreators/posts';
import './Profile.css';

const Profile: React.FunctionComponent = () => {
 
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelectorTyped(store => store.posts.posts);
  const user = useSelectorTyped(store => store.user.user);
  const usersPosts = posts.filter(el => el.author.login === user?.login); 
  console.log('POSTS=>', usersPosts.length);
  
  useEffect(() => {
    dispatch(setPostsThunk());
  }, []);
  
  return (
    <div className="App">
      <div className="profile-header">
        <img className="avatar" src={user?.avatar} height="150" width="150" alt=""/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <span className="profile-login"><h1>{user?.login}</h1></span>
      </div>
      <br />
      {Boolean(usersPosts.length) && usersPosts.map(el => (
        <div className="post" onClick={() => history.push(`/post/${el._id}`)} key={el._id}><img src={el.photoUrl} height="300" width="240" alt=""/></div>
      ))}
    </div>
  );
}

export default Profile;
