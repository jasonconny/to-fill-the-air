import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLoginClick = async () => {
    await loginWithRedirect();
  };

  const handleLogoutClick = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <section>
      <h2>Login</h2>

      {isAuthenticated ? (
        <button onClick={handleLogoutClick}>Log Out</button>
      ) : (
        <button onClick={handleLoginClick}>Log In</button>
      )}
    </section>
  );
};

export default LoginView;
