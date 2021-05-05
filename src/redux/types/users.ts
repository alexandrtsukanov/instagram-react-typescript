import { IUser } from '../../interfaces/user';

export interface IUserStore {
  user: IUser | null
};

export enum TypesUser {
  SET_USER = 'SET_USER',
  SIGNUP_USER = 'SIGNUP_USER',
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
};

interface ISetUser {
  type: TypesUser.SET_USER
  payload: IUser | null
};

interface ISignupUser {
  type: TypesUser.SIGNUP_USER
  payload: IUser
};

interface ILoginUser {
  type: TypesUser.LOGIN_USER
  payload: IUser
};

interface ILogoutUser {
  type: TypesUser.LOGOUT_USER
};

export type UserAction = ISetUser | ISignupUser | ILoginUser | ILogoutUser

