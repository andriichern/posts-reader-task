import { useState, memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { sitePaths } from 'src/routeMap';

const LoginForm = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [loginForm, setLoginForm] = useState({});

  const from = location.state?.from || { pathname: sitePaths.posts };

  const handleInput = ({ target }) =>
    setLoginForm(prev => ({
      ...prev,
      [target.name]: target.value,
    }));

  const handleSignIn = async () => {
    await auth.signInUser(loginForm);

    history.replace(from);
  };

  return (
    <div>
      <div>
        <label htmlFor="login-name">Name</label>
        <input id="login-name" name="name" onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" onChange={handleInput} />
      </div>
      <button onClick={handleSignIn}>Login</button>
    </div>
  );
};

export default memo(LoginForm);
