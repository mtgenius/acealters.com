import React from 'react';
import Route from 'react-router-dom/Route';

class PageRouter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.children = this.children.bind(this);
  }

  children(props) {
    return this.props.children(
      props.match.isExact ?
        props.match.url.replace(/^\//, '') || 'home' :
        null
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

export default PageRouter;
