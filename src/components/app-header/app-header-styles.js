export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  button: {
    marginRight: theme.spacing.unit
  },
  title: {
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row'
  }
});
