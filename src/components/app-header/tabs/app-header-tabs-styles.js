import { mobileMediaQuery } from '../../../constants/breakpoints';

export default (theme) => ({
  indicator: {
    backgroundColor: 'rgba(240, 240, 240, 0.4)'
  },
  scroller: {
    display: 'flex'
  },
  tab: {
    display: 'flex',
    height: '100%',
    minWidth: 120
  },
  tabLabel: {
    alignItems: 'stretch',
    display: 'flex',
    flexGrow: 1
  },
  tabLabelContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    flexGrow: 1,
    padding: 0
  },
  tabLink: {
    alignItems: 'center',
    color: theme.palette.common.white,
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    textDecoration: 'none'
  },
  tabs: {
    alignSelf: 'stretch',
    display: 'flex'
  },
  tabsFlexContainer: {
    flexGrow: 1
  },
  tabWrapper: {
    height: '100%',
    position: 'absolute'
  },
  [mobileMediaQuery]: {
  }
});
