import { Suspense } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { sitePaths, routesMap } from '../routeMap';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      {routesMap.map(({ page: Page, ...route }) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <Suspense fallback="Loading...">
            <Page />
          </Suspense>
        </Route>
      ))}
      <Redirect from="/" to={sitePaths.posts} />
    </Switch>
  </Router>
);

export default App;
