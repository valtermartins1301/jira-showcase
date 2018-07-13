import React from 'react';
import { render } from 'react-dom';
import App from './views/App/component';
import registerServiceWorker from './registerServiceWorker';

render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
