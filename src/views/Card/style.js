const styles = () => ({
  root: {
    position: 'relative',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  '@media (min-width: 992px)': {
    root: {
      float: 'left',
      width: '25%',
    },
  },
  project: {
    background: '#fff',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    position: 'relative',
    margin: '20px auto',
  },
  thumb: {
    position: 'absolute',
    top: '5px',
    left: '50%',
    transform: 'translate(-50%)',
    width: '100%',
    padding: '15px',
    transition: 'all 0.2s ease-in-out',
  },
  thumbImg: {
    width: '100%',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '6px',
  },
  description: {
    paddingTop: '150%',
  },
});

export default styles;
