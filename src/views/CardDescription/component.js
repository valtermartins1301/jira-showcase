import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export function Card({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.category}>
        <span>Ethnic</span>
      </div>
      <div className={classes.title}>
        <h3>My face not my heart</h3>
      </div>
      <div className={classes.subTitle}>
        <p>
          Description Product tell me how to change playlist height size
        </p>
      </div>
      <div className={classes.footer}>
        <div className={classes.left}>
          <span className="price">Rp500.000</span>
        </div>
        <div className={classes.right}>
          <i className="zmdi zmdi-shopping-basket" />
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Card);
