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
      // transform: 'translateX(-1px) translateY(calc(-11.25% - 1px))'
    }
  },
  gridListTileTile: {
    boxShadow: theme.shadows[2]
  },
  imgFullWidth: {
    top: 0,
    transform: 'translateY(-11.25%)'
  },
  paper: {
    margin: '1em',
    padding: '1em'
  },
  title: {
    paddingBottom: theme.spacing.unit
  }
});
