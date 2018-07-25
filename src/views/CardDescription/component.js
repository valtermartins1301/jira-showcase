import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export function CardDescription({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.category}>
        <h2>Nome do projeto</h2>
      </div>
      <div className={classes.title}>
        <h3>Doing</h3>
      </div>
      <div className={classes.subTitle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className={classes.footer}>
        <span>Exercitation ullamco laboris nisi ut aliquip</span>
      </div>
    </div>
  );
}

CardDescription.defaultProps = {
  classes: {},
};

export default injectSheet(style)(CardDescription);
