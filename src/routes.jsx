import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scheduled from './pages/Scheduled';

const routes = [{
  componet: Home,
  path: '/',
  name: 'Home',
}, {
  componet: Scheduled,
  path: '/scheduled',
  name: 'Scheduled',
}];

const Routes = () => (
  <BrowserRouter>
    <Navbar routes={routes} />
    <Switch>
      {routes.map(({ path, componet }) => (
        <Route exact path={path} component={componet} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
