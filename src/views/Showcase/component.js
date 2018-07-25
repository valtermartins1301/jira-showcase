import React from 'react';
import injectSheet from 'react-jss';
import Card from '../Card/component';
import style from './style';

export function Showcase({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.row}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

Showcase.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Showcase);
