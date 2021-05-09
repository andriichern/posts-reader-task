import { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import storeConfig from 'store';
import LoginPage from 'pages/LoginPage';
import AuthRoute from 'components/AuthRoute';
import { sitePaths, routesMap } from 'src/routesMap';

const history = createBrowserHistory();

const App = () => (
  <ReduxProvider store={storeConfig.store}>
    <PersistGate persistor={storeConfig.persistor}>
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
    </PersistGate>
  </ReduxProvider>
);

export default App;
