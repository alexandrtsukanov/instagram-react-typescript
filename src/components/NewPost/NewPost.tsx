import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { newPostThunk } from '../../redux/actionCreators/posts';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';

const NewPost: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelectorTyped(store => store.user.user);
  const [photoUrlInput, setPhotoUrlInput] = useState<string>('');
  const [entryInput, setEntryInput] = useState<string>('');

  const changePhotoUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoUrlInput(event.target.value);
  };

  const changeEntryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntryInput(event.target.value);
  };

  const submitHandlerCreatePost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(newPostThunk(photoUrlInput, entryInput));
    history.push(`/user/${user?._id}`)
  };

  return (

    <div className="App">
      <h1>New Post:</h1>
      <br />
      <form onSubmit={submitHandlerCreatePost}> 

        <div className="mb-3">
          <label htmlFor="exampleInputPhotoUrl" className="form-label">Photo: insert link</label>
          <input onChange={changePhotoUrlHandler} value={photoUrlInput} type="text" className="form-control" id="exampleInputPhotoUrl" aria-describedby="photoUrlHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEntry" className="form-label">Text</label>
          <input onChange={changeEntryHandler} value={entryInput} type="text" className="form-control" id="exampleInputEntry" aria-describedby="entryHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>

    </div>
  );
}

export default NewPost;
