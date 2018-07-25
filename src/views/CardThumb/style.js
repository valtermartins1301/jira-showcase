const styles = () => ({
  root: {
    height: '28vh',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    borderRadius: '1em 1em 0em 0em',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    height: '100%',
    width: '100%',
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'translate(-50%,-51%)',
    },
  },
});

export default styles;
