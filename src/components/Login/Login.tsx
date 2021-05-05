import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginThunk } from '../../redux/actionCreators/users';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';

const Login: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [loginInput, setLoginInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const user = useSelectorTyped(store => store.user.user);

  const changeLoginHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(event.target.value);
  };

  const changePasswordHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const submitHandlerLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(loginInput, passwordInput));
    setLoginInput('');
    setPasswordInput('');
    if (user?._id) {
      history.push(`/user/${user?._id}`);
    } else {
      history.push('/user');
    };
  };

  return (

    <div className="App">

    <h1>Sign Up</h1>

    <form onSubmit={submitHandlerLogin}>

      <div className="mb-3">
        <label htmlFor="exampleInputLogin" className="form-label">Enter Your Login:</label>
        <input onChange={changeLoginHandler} value={loginInput} type="text" className="form-control" id="exampleInputLogin" aria-describedby="loginHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword" className="form-label">Enter Your Password:</label>
        <input onChange={changePasswordHandler} value={passwordInput} type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" />
      </div>
      
      <button type="submit" className="btn btn-primary">Log In</button>
    </form>
  </div>
  );
}

export default Login;
