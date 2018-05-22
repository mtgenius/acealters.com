import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import appStyles from './app-styles';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <header>
          <h1 className={this.props.classes.h1}>Ace Alters</h1>
        </header>
        <p>Coming soon...</p>
      </div>
    );
  }
}

export default withStyles(appStyles)(App);
