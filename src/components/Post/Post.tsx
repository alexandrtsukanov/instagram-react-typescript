import React, { useState } from 'react';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';
import { useParams, useHistory } from 'react-router-dom';
import { IParamsPost } from '../../interfaces/params';
import { useDispatch } from 'react-redux';
import { deletePostThunk, editPostThunk } from '../../redux/actionCreators/posts';

const Post: React.FunctionComponent = () => {

  const params = useParams<IParamsPost>();
  const history = useHistory();
  const dispatch = useDispatch();
  const posts = useSelectorTyped(store => store.posts.posts);
  const user = useSelectorTyped(store => store.user.user);
  const currentPost = posts.filter(el => el._id === params.id)[0];

  const [elemEdit, setElemEdit] = useState<boolean>(false)
  const [newEntryInput, setNewEntryInput] = useState<(string)>(currentPost.entry);

  const deletePostHandler = (paramId: string) => {
    dispatch(deletePostThunk(paramId));
    history.push(`/user/${user?._id}`);
  };

  const editPostHandler = (paramId: string, paramEntry: string) => {
    dispatch((editPostThunk(paramId, paramEntry)));
    history.push(`/user/${user?._id}`);
    setNewEntryInput('');
    setElemEdit(false);
  }

  const changeEntryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEntryInput(event.target.value);
  };

  return (
    <div className="App">

        <div>{currentPost?.author.login}</div>
        <div><img src={currentPost?.photoUrl} height="500" width="400" alt=""/></div>

        {elemEdit ? (
          <>
          <input onChange={changeEntryHandler} value={newEntryInput} type="text"/>
          <button onClick={() => editPostHandler(params.id, newEntryInput)} >Change</button>
          </>
        ) : (
          <div>{currentPost?.entry}</div>
        )}
        <div>{currentPost?.likers.length}&#10084;</div>
        <div>{currentPost?.date}</div>
        <div>
          <span onClick={() => deletePostHandler(params.id)}><button className="btn btn-primary">Delete Post</button></span>
          <span><button onClick={() => setElemEdit(prev => !prev)} className="btn btn-primary">Edit Post</button></span>
        </div>

    
    </div>
  );
}

export default Post;
