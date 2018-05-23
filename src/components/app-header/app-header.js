import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import appHeaderStyles from './app-header-styles';

class AppHeader extends React.PureComponent {
  render() {
    return (
      <AppBar
        className={this.props.classes.appBar}
        position="static"
      >
        <Toolbar className={this.props.classes.toolbar}>
          <Typography
            children="AceAlters.com"
            className={this.props.classes.title}
            color="inherit"
            variant="title"
          />
          <Button
            children="Shop"
            className={this.props.classes.button}
            component={Link}
            to="/"
          />
          <Button
            children="Gallery"
            className={this.props.classes.button}
            component={Link}
            to="/gallery"
          />
          <Button
            children="Contact"
            component={Link}
            to="/contact"
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(appHeaderStyles)(AppHeader);
