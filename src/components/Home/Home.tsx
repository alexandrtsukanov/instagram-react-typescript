import React from 'react';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';

const Home: React.FunctionComponent = () => {

  const posts = useSelectorTyped(store => store.posts.posts)

  return (
    <div className="App">
      <h1>Home</h1>
      {Boolean(posts.length) && posts.map(el => (
        <div key={el._id}>
          <div>{el.author.login}</div>
          <div><img src={el.photoUrl} height="500" width="400" alt=""/></div>
          <div>{el.entry}</div>
          <div>{el.likers.length}&#10084;</div>
          <div>{el.date}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
