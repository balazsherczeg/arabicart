import React from 'react';
import {render} from 'react-dom';

// import Routes from './Routes';
import Control from './View/Control';
import Display from './View/Display';

import '../static/styles/reset.css';
import '../static/styles/fonts.css';
import '../static/styles/layout.css';
import '../static/styles/colors.css';

// render(<Routes />, document.getElementById('root'));

const id = '51';

render(
  <div style={{height: '100vh'}}>
    <Control id={id}>
      <Display id={id} />
    </Control>
  </div>,
  document.getElementById('root')
);
