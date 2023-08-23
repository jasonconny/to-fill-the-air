import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const HomeView: React.FC = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <section>
      <p>Grateful Dead set lists.</p>

      {isAuthenticated ? <p>Welcome {user?.name}</p> : null}
    </section>
  );
};

export default HomeView;
