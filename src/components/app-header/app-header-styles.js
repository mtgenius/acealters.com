import { mobileMediaQuery } from '../../constants/breakpoints';

export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  [mobileMediaQuery]: {
    toolbar: {
      alignItems: 'stretch',
      flexDirection: 'column'
    }
  }
});
