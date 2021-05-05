import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelectorTyped } from '../../hooks/useSelectorTyped';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/actionCreators/users';

const Navbar: React.FunctionComponent = () => {

  const dispatch = useDispatch();
  const user = useSelectorTyped(store => store.user.user)
  console.log(user)
  return (

    <>

    {Boolean(user) ? 

      <ul className="navbar">
        <span>
          <NavLink exact to="/">
            Home
          </NavLink>
        </span>
        <span>
          <NavLink to="/newpost">
            Create Post
          </NavLink>
        </span>
        <span>
          <NavLink to={`/user/${user?._id}`}> 
            Profile
          </NavLink>
        </span>
        <span>
          <NavLink onClick={() => dispatch(logoutThunk())} exact to="/">
            Log Out
          </NavLink>
        </span>
      </ul> :
      
      <ul className="navbar">
        <span>
          <NavLink exact to="/">
            Home
          </NavLink>
        </span>
        <span>
          <NavLink to="/signup">
            Sign Up
          </NavLink>
        </span>
        <span>
          <NavLink to="/login">
            Log In
          </NavLink>
        </span>
        <span>
        <NavLink to="/about">
          About
        </NavLink>
      </span>
    </ul>} 
        
    </>

  );
}

export default Navbar;
