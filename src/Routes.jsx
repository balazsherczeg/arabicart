import {hot} from 'react-hot-loader';
import React from 'react';
import {Router} from "@reach/router"

import Page from './Page';

const Routes = () => (
  <Router>
    <Page path="/category/:category"/>
    <Page path="/" />
  </Router>
);

export default hot(module)(Routes);
