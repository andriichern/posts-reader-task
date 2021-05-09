import { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { sitePaths } from 'src/routeMap';

const AuthRoute = ({ children, location, ...props }) => {
  const auth = useAuth();

  return auth.sl_token ? (
    <Route {...props} location={location}>
      {children}
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: sitePaths.login,
        state: { from: location },
      }}
    />
  );
};

export default memo(AuthRoute);
