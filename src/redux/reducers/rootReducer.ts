import { combineReducers } from "redux";
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

export type RootType = ReturnType<typeof rootReducer>
