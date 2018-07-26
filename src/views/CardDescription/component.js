import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export function CardDescription({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.category}>
        <h2>Project Name</h2>
      </div>
      <div className={classes.title}>
        <h3>Status</h3>
      </div>
      <div className={classes.subTitle}>
        <ul className={classes.list}>
          <li className={classes.item}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
          <li className={classes.item}>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
        </ul>
      </div>
    </div>
  );
}

CardDescription.defaultProps = {
  classes: {},
};

export default injectSheet(style)(CardDescription);
