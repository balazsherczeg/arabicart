import {hot} from 'react-hot-loader';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Loader from './Loader';
import Page from './Page';

const Routes = () => (
  <BrowserRouter>
    <Loader>
      <Switch>
        <Route path="/category/:category">
          <Page />
        </Route>
        <Route path="/">
          <Page />
        </Route>
      </Switch>
    </Loader>
  </BrowserRouter>
);

export default hot(module)(Routes);
