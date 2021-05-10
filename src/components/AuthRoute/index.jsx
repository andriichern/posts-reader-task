import { memo } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { sitePaths } from 'src/routesMap';

const AuthRoute = ({ children, ...props }) => {
  const auth = useAuth();
  const history = useHistory();

  return auth.sl_token ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: sitePaths.login,
        state: { from: history.location.pathname },
      }}
    />
  );
};

AuthRoute.propTypes = {
  children: PropTypes.element,
};

export default memo(AuthRoute);
