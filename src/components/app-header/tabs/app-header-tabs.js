import withStyles from '@material-ui/core/styles/withStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import memoizeClasses from 'memoize-classes';
import React from 'react';
import Link from 'react-router-dom/Link';
import appHeaderTabsStyles from './app-header-tabs-styles';
import PageRouter from '../../page-router/page-router';

class AppHeaderTabs extends React.PureComponent {

  constructor(props) {
    super(props);
    this.memoizeTabClasses = memoizeClasses();
    this.memoizeTabsClasses = memoizeClasses();
  }

  link(to, children) {
    return (
      <Link
        className={this.props.classes.tabLink}
        to={to}
      >
        <span children={children} />
      </Link>
    );
  }

  get tabClasses() {
    return this.memoizeTabClasses({
      label: this.props.classes.tabLabel,
      labelContainer: this.props.classes.tabLabelContainer,
      root: this.props.classes.tab,
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
      <PageRouter>
        {(page) =>
          <Tabs
            classes={this.tabsClasses}
            fullWidth
            value={page || false}
          >
            <Tab
              classes={this.tabClasses}
              disabled={page === 'home'}
              label={this.link('/', 'Shop')}
              value="home"
            />
            <Tab
              classes={this.tabClasses}
              disabled={page === 'gallery'}
              label={this.link('/gallery', 'Gallery')}
              value="gallery"
            />
            <Tab
              classes={this.tabClasses}
              disabled={page === 'contact'}
              label={this.link('/contact', 'Contact')}
              value="contact"
            />
          </Tabs>
        }
      </PageRouter>
    );
  }
}

export default withStyles(appHeaderTabsStyles)(AppHeaderTabs);
