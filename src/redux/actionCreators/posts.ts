
import { Dispatch } from 'react';
import { PostAction, TypesPosts } from '../types/posts';

export const setPostsThunk = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    const response = await fetch('http://localhost:8080/posts', {
      credentials: 'include',
    });
    const result = await response.json();
    dispatch({
      type: TypesPosts.SET_POSTS,
      payload: result,
    });
  };
};

export const newPostThunk = (photoUrl: string, entry: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    const response = await fetch('http://localhost:8080/posts/newpost', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photoUrl, entry }),
    });
    const result = await response.json();
    console.log(result)
    dispatch({
      type: TypesPosts.ADD_POST,
      payload: result,
    });
  };
};

export const deletePostThunk = (idParam: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    const response = await fetch(`http://localhost:8080/posts/delete/${idParam}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type: TypesPosts.DELETE_POST,
      payload: idParam,
    });
  };
};

export const editPostThunk = (_id: string, entry: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    const response = await fetch(`http://localhost:8080/posts/edit/${_id}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ entry })
    });
    dispatch({
      type: TypesPosts.EDIT_POST,
      payload: {
        _id,
        entry,
      },
    });
  };
};
