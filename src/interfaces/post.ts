import { IComment } from './comment';
import { IUser } from './user';

export interface IPost {
  author: IUser
  photoUrl: string
  entry: string
  likers: IUser[]
  comments: IComment[]
  date: Date
  _id: string
};

export interface IPostForEditAction {
  _id: string
  entry: string
};
