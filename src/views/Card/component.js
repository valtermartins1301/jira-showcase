import React from 'react';
import injectSheet from 'react-jss';
import CardDescription from '../CardDescription/component';
import CardThumb from '../CardThumb/component';
import style from './style';

export function Card({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.project}>
        <CardThumb />
        <CardDescription />
      </div>
    </div>
  );
}

Card.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Card);
