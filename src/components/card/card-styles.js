export default {
  root: {
    margin: '1em',
    padding: '3em 1em 1em 1em',
    position: 'relative',
  },
  back: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    left: '1em',
    position: 'absolute',
    top: '0.5em',
  },
  backIcon: {
    fontSize: '1.5em',
    marginTop: '-0.125em',
    paddingRight: '0.25em',
  },
  comparison: {
    display: 'flex',
    flexDirection: 'row',
    margin: '4em auto 5em auto',
    maxWidth: '446px',
    '& > div': {
      textAlign: 'center',
      '& > span': {
        fontSize: '1em',
      },
    },
  },
  date: {
    paddingTop: '1em',
    textAlign: 'center',
  },
  title: {
    paddingBottom: 0,
    textAlign: 'center',
  }
};
