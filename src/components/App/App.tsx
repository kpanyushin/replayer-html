import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from 'pages/NotFound';

const App = ({ routes }: any) => (
  <Switch>
    {routes.map(({ path, exact, component: Component }: any) => (
      <Route key={path} exact={exact} path={path} component={Component} />
    ))}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
