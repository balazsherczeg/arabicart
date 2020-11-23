import React from 'react';
import {render} from 'react-dom';

import Routes from './Routes';

import '../static/styles/reset.css';
import '../static/styles/fonts.css';
import '../static/styles/layout.css';
import '../static/styles/colors.css';

render(<Routes />, document.getElementById('root'));
