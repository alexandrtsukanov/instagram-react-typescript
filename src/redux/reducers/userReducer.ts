import { IUserStore, TypesUser, UserAction } from '../types/users';
import { initStoreUser } from '../stores/users';

export const userReducer = (store: IUserStore = initStoreUser, action: UserAction): IUserStore => {
  switch (action.type) {
    case TypesUser.SET_USER:
      return {...store, user: action.payload}
    case TypesUser.SIGNUP_USER:
      return {...store, user: action.payload}
    case TypesUser.LOGIN_USER:
      return {...store, user: action.payload}
    case TypesUser.LOGOUT_USER:
      return {...store, user: null}
    default:
      return store
  }
};
