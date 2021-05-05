import { IPost } from './post';
import { IUser } from './user';

export interface IComment {
  author: IUser
  entry: string
  post: IPost
  _id: string
};
