const styles = () => ({
  root: {
    paddingTop: '150%',
  },
  category: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '5px',
    marginBottom: '45px',
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    '*': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
  },
  title: {
    textAlign: 'center',
    h3: {
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '15px auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      width: '100%',
    },
  },
});

export default styles;
