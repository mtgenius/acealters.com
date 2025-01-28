export default (theme) => ({
  actionIcon: {
    color: theme.palette.primary.light,
    paddingRight: theme.spacing.unit * 2
  },
  gridListTileBar: {
    display: 'none'
  },
  gridListTileRoot: {
    '&:hover $gridListTileTile': {
      borderBottomWidth: 2,
      borderColor: theme.palette.primary.main,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderTopWidth: 0,
      boxShadow: theme.shadows[4]
    },
    '&:hover $gridListTileBar': {
      display: 'flex'
    },
    '&:hover $imgFullWidth': {
      transform: 'translateY(-4.125%) !important'
    }
  },
  gridListTileTile: {
    boxShadow: theme.shadows[2]
  },
  imgBodyShown: {
    transform: 'scale(1.5) !important'
  },
  imgFullWidth: {
    top: 0,
    transform: 'translateY(-12.5%)',
    transitionProperty: 'transform',
    transitionDuration: '0.1s'
  },
  paper: {
    margin: '1em',
    padding: '1em'
  },
  title: {
    paddingBottom: theme.spacing.unit
  }
});
