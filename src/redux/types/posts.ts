import { IPost, IPostForEditAction } from '../../interfaces/post';

export interface IPostStore {
  posts: IPost[]
};

export enum TypesPosts {
  SET_POSTS = 'SET_POSTS',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  EDIT_POST = 'EDIT_POST',
};

interface ISetPosts {
  type: TypesPosts.SET_POSTS,
  payload: IPost[],
}

interface IAddPost {
  type: TypesPosts.ADD_POST,
  payload: IPost,
};

interface IDeletePost {
  type: TypesPosts.DELETE_POST
  payload: string
};

interface IEditPost {
  type: TypesPosts.EDIT_POST
  payload: IPostForEditAction
};

export type PostAction = ISetPosts | IAddPost | IDeletePost | IEditPost
