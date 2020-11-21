import {hot} from 'react-hot-loader';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Page from './Page';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/category/:category">
        <Page />
      </Route>
      <Route path="/">
        <Page />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default hot(module)(Routes);
