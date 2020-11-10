import {hot} from 'react-hot-loader';
import React from 'react';

import Loader from './Loader';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../assets/styles/reset.css';
import '../assets/styles/fonts.css';

const App = () => (
  <Loader>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </Loader>
);

export default hot(module)(App);
