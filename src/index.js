import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-jss';
import App from './views/App/component';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import './index.css';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
