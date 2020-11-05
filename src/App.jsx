import {hot} from 'react-hot-loader';
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../assets/styles/reset.css';
import '../assets/styles/fonts.css';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default hot(module)(App);
