import React from 'react';
import injectSheet from 'react-jss';
import Header from '../Header/component';
import Showcase from '../Showcase/component';
import style from './style';

export function App({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <Showcase />
    </div>
  );
}

export default injectSheet(style)(App);
