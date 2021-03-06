import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scheduling from './pages/Scheduling';

const routes = [{
  componet: Home,
  path: '/',
  name: 'Home',
}, {
  componet: Scheduling,
  path: '/scheduling',
  name: 'Scheduling',
}];

const Routes = () => (
  <BrowserRouter>
    <Navbar routes={routes} />
    <Switch>
      {routes.map(({ path, componet }) => (
        <Route key={path} exact path={path} component={componet} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
