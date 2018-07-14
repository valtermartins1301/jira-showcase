import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

const headerTitle = process.env.REACT_APP_HEADER_TITLE;

export function Header({ classes }) {
  return (
    <header className={classes.root}>
      <h1 className={classes.title}>{headerTitle}</h1>
    </header>
  );
}

Header.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Header);
