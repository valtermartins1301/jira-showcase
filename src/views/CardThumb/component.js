import React from 'react';
import injectSheet from 'react-jss';
import style from './style';

export function CardThumb({ classes }) {
  return (
    <div className={classes.root}>
      <img className={classes.img} alt="" src="https://bankfacil.atlassian.net/secure/projectavatar?avatarId=10324&size=xxxlarge" />
    </div>
  );
}

CardThumb.defaultProps = {
  classes: {},
};

export default injectSheet(style)(CardThumb);
