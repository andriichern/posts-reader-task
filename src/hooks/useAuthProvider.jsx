import { useState } from 'react';
import { signIn } from 'api/authApi';

export default () => {
  const [auth, setAuth] = useState(null);

  const signInUser = async ({ name, email }) => {
    const authResponse = await signIn({ name, email });

    setAuth(authResponse.data);
  };

  return {
    data: auth,
    signInUser,
  };
};
