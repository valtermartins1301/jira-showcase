import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export function Header({ classes }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Welcome to React</h1>
    </header>
  );
}

Header.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Header);
