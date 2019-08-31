import React from 'react';
import { useAuth0 } from '../../utils/oauth.js';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      ) : (
        <button onClick={() => logout()}>Log out</button>
      )}
    </div>
  );
};

export default NavBar;
