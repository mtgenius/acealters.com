import { mobileMediaQuery } from '../../../constants/breakpoints';

export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    fontFamily: '"Architects Daughter", cursive'
  },
  toolbar: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  [mobileMediaQuery]: {
    toolbar: {
      flexDirection: 'column'
    }
  }
});
