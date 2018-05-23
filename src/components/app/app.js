import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Route from 'react-router-dom/Route';
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
        props.match.url.replace(/^\//, '') || 'home' :
        null;
    return [
      <Header
        key={0}
        page={page}
      />,
      <Body
        key={1}
        page={page}
      />
    ];
  }

  render() {
    return [
      <CssBaseline key={0} />,
      <Route
        children={this.children}
        key={1}
        path="(/|/contact|/gallery)?"
        sensitive
        strict
      />
    ];
  }
}

export default App;
