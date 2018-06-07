import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import memoizeClasses from 'memoize-classes';
import React from 'react';
import Link from 'react-router-dom/Link';
import appHeaderTabsStyles from './app-header-tabs-styles';

class AppHeaderTabs extends React.PureComponent {

  constructor(props) {
    super(props);
    this.memoizeTabClasses = memoizeClasses();
    this.memoizeTabsClasses = memoizeClasses();
  }

  link(to, children) {
    return (
      <Link
        className={this.props.classes.link}
        to={to}
      >
        <span children={children} />
      </Link>
    );
  }

  get tabClasses() {
    return this.memoizeTabClasses({
      label: this.props.classes.label,
      labelContainer: this.props.classes.labelContainer,
      root: this.props.classes.tab,
      selected: this.props.classes.selected,
      wrapper: this.props.classes.tabWrapper
    });
  }

  get tabsClasses() {
    return this.memoizeTabsClasses({
      flexContainer: this.props.classes.tabsFlexContainer,
      indicator: this.props.classes.indicator,
      root: this.props.classes.tabs,
      scroller: this.props.classes.scroller
    });
  }

  render() {
    return (
      <Tabs
        classes={this.tabsClasses}
        fullWidth
        value={this.props.page || false}
      >
        <Tab
          classes={this.tabClasses}
          disabled={this.props.page === 'home'}
          label={this.link('/', 'Shop')}
          value="home"
        />
        <Tab
          classes={this.tabClasses}
          disabled={this.props.page === 'gallery'}
          label={this.link('/gallery', 'Gallery')}
          value="gallery"
        />
        <Tab
          classes={this.tabClasses}
          disabled={this.props.page === 'contact'}
          label={this.link('/contact', 'Contact')}
          value="contact"
        />
      </Tabs>
    );
  }
}

export default withStyles(appHeaderTabsStyles)(AppHeaderTabs);