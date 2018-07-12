import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import Route from 'react-router-dom/Route';
import appStyles from './app-styles';
import Body from './body/app-body';
import Header from './header/app-header';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.children = this.children.bind(this);
  }

  children(props) {
    const page =
      props.match.isExact ?
        props.match.url.replace(/^\//, '') || 'gallery' :
        null;
    return (
      <React.Fragment>
        <Header page={page} />
        <Body page={page} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Route
          children={this.children}
          path="(/|/contact|/gallery)?"
          sensitive
          strict
        />
      </React.Fragment>
    );
  }
}

export default withStyles(appStyles)(App);
