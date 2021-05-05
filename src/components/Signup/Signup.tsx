import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signupThunk } from '../../redux/actionCreators/users';
import { useSelectorTyped } from '../../hooks/useSelectorTyped';

const Signup: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [emailInput, setEmailInput] = useState<string>('');
  const [loginInput, setLoginInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [avatarInput, setAvatarInput] = useState<string>('');
  const user = useSelectorTyped(store => store.user.user);

  const changeEmailHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const changeLoginHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInput(event.target.value);
  };

  const changePasswordHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const changeAvatarHandler  = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarInput(event.target.value);
  };

  const submitHandlerSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signupThunk(emailInput, loginInput, passwordInput, avatarInput));
    setEmailInput('');
    setLoginInput('');
    setPasswordInput('');
    setAvatarInput('');
    if (user?._id) {
      history.push(`/user/${user?._id}`);
    } else {
      history.push('/user');
    };
  };

  return (

    <div className="App">

      <h1>Sign Up</h1>

      <form onSubmit={submitHandlerSignup}> 

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Email:</label>
          <input onChange={changeEmailHandler} value={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLogin" className="form-label">Create Login:</label>
          <input onChange={changeLoginHandler} value={loginInput} type="text" className="form-control" id="exampleInputLogin" aria-describedby="loginHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Create Password:</label>
          <input onChange={changePasswordHandler} value={passwordInput} type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputAva" className="form-label">Set Your Avatar:</label>
          <input onChange={changeAvatarHandler} value={avatarInput} type="text" className="form-control" id="exampleInputAva" aria-describedby="avadHelp" />
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
