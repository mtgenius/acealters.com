import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import appStyles from './app-styles';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={this.props.classes.toolbar}>
            <Typography
              children="AceAlters.com"
              className={this.props.classes.title}
              color="inherit"
              variant="title"
            />
            <Button children="Yes" />
            <Button children="Yes" />
          </Toolbar>
        </AppBar>
        <p>Coming soon...</p>
      </div>
    );
  }
}

export default withStyles(appStyles)(App);
