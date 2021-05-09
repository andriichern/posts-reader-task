import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { signInUser } from 'store/auth';
import { sitePaths } from 'src/routeMap';

const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({});

  const from = location.state?.from || { pathname: sitePaths.posts };

  const handleInput = ({ target }) =>
    setLoginForm(prev => ({
      ...prev,
      [target.name]: target.value,
    }));

  const handleSignIn = () => dispatch(signInUser(loginForm, () => history.replace(from)));

  return (
    <div className="login-form">
      <div className="flex column login-form-group">
        <label htmlFor="login-name" className="login-form-label">
          Name
        </label>
        <input id="login-name" name="name" className="login-form-input" onChange={handleInput} />
      </div>
      <div className="flex column login-form-group">
        <label htmlFor="login-email" className="login-form-label">
          Email
        </label>
        <input id="login-email" name="email" className="login-form-input" onChange={handleInput} />
      </div>
      <button type="button" disabled={!(loginForm.name && loginForm.email)} onClick={handleSignIn}>
        Login
      </button>
    </div>
  );
};

export default memo(LoginForm);
