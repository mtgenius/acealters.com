import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import appFooterStyles from './app-footer-styles';
import Link from './link/app-footer-link';

const year = new Date().getFullYear();

export default withStyles(appFooterStyles)(
  class AppFooter extends React.PureComponent {
    render() {
      return (
        <footer className={this.props.classes.root}>
          &copy; 2016-{year}{' '}
          <Link children="Ace Quisido" href="https://quisido.com/" title="Quisido.com" /> and{' '}
          <Link children="Charles Stover" href="https://charlesstover.com/" title="CharlesStover.com" />
        </footer>
      );
    }
  }
);
