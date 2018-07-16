export default (theme) => ({
  actionIcon: {
    color: theme.palette.primary.light,
    paddingRight: theme.spacing.unit * 2
  },
  gridListTile: {
    '&:hover $gridListTileBar': {
      display: 'flex'
    }
  },
  gridListTileBar: {
    display: 'none'
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
