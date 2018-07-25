const styles = () => ({
  root: {
    position: 'relative',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
  '@media (min-width: 992px)': {
    root: {
      float: 'left',
      width: '25%',
    },
  },
  project: {
    background: '#fff',
    borderRadius: '1em',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    position: 'relative',
    margin: '1em auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
});

export default styles;
