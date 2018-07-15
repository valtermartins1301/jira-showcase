const styles = () => ({
  root: {
    padding: '1em 0',
  },
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  '@media (min-width: 768px)': {
    container: {
      width: '750px',
    },
  },
  '@media (min-width: 992px)': {
    container: {
      width: '970px',
    },
  },
  '@media (min-width: 1200px)': {
    container: {
      width: '1170px',
    },
  },
  row: {
    marginLeft: '-15px',
    marginRight: '-15px',
  },
});

export default styles;
