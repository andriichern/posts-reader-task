import { Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from 'store';
import LoginPage from 'pages/LoginPage';
import AuthRoute from 'components/AuthRoute';
import { sitePaths, routesMap } from 'src/routeMap';

const store = configureStore();
const history = createBrowserHistory();

const App = () => (
  <ReduxProvider store={store}>
    <Router history={history}>
      <Switch>
        <Suspense fallback="Loading...">
          <Route path={sitePaths.login}>
            <LoginPage />
          </Route>
          {routesMap.map(({ page: Page, ...route }) => (
            <AuthRoute key={route.path} path={route.path} exact={route.exact}>
              <Page />
            </AuthRoute>
          ))}
        </Suspense>
        <Redirect from="/" to={sitePaths.login} />
      </Switch>
    </Router>
  </ReduxProvider>
);

export default App;
