import { memo } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { sitePaths } from 'src/routesMap';

const AuthRoute = ({ children, location, ...props }) => {
  const auth = useAuth();
  const history = useHistory();

  return auth.sl_token ? (
    <Route {...props} location={location}>
      {children}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: sitePaths.login,
        state: { from: history.location.pathname },
      }}
    />
  );
};

export default memo(AuthRoute);
