import {hot} from 'react-hot-loader';
import React from 'react';
import {Router} from "@reach/router"

import Page from './Page';

const Routes = () => (
  <Router>
    <Page default="/" />
  </Router>
);

export default hot(module)(Routes);
