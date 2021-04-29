import { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routesMap } from '../routeMap';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback="Loading...">
        {routesMap.map(({ page: Page, ...route }) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            <Page />
          </Route>
        ))}
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default App;
