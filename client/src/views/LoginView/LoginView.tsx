import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginView: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section>
      <h2>Login</h2>

      <button onClick={() => loginWithRedirect()}>Log In</button>
    </section>
  );
};

export default LoginView;
