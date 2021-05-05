import { IPost } from './post';

export interface IUser {
  login: string
  password: string
  email: string
  avatar: string
  posts: IPost[]
  _id: string
};
