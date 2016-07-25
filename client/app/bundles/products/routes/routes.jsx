import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import RouterContainer from '../containers/RouterContainer';
import CartContainer from '../containers/CartContainer';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={RouterContainer} />
    <Route path="cart" component={CartContainer} />
  </Route>
);
