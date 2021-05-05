import { Dispatch } from "react";
import { TypesUser, UserAction } from "../types/users"

export const signupThunk = (email: string, login: string, password:string, avatar: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await fetch('http://localhost:8080/users/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, login, password, avatar })
    });
    const result = await response.json();
    dispatch({
      type: TypesUser.SIGNUP_USER,
      payload: result,
    }); 
  };
};

export const loginThunk = (login: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password })
    });
    const result = await response.json();
    dispatch({
      type: TypesUser.LOGIN_USER,
      payload: result,
    });
  };
};

export const setUserThunk = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await fetch('http://localhost:8080/users/auth', {
      credentials: 'include',
    });
    const result = await response.json();
    console.log(response)
    console.log(result)

    dispatch({
      type: TypesUser.SET_USER,
      payload: result,
    });
  };
};

export const logoutThunk = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await fetch('http://localhost:8080/users/logout', {
      credentials: 'include',
    });
    dispatch({
      type: TypesUser.LOGOUT_USER,
    });
  };
};
