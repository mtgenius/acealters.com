import React from 'react';
import Route from 'react-router-dom/Route';
import Body from './body/app-body';

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
      <Body page={page} />
    );
  }

  render() {
    return (
      <Route
        children={this.children}
        path="(/|/contact|/gallery)?"
        sensitive
        strict
      />
    );
  }
}

export default App;
