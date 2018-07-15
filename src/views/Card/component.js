import React from 'react';
import injectSheet from 'react-jss';
import CardDescription from '../CardDescription/component';
import style from './style';

export function Card({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.project}>
        <div className={classes.thumb}>
          <img className={classes.thumbImg} src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" />
        </div>
        <CardDescription />
      </div>
    </div>
  );
}

Card.defaultProps = {
  classes: {},
};

export default injectSheet(style)(Card);
