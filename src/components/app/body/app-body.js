import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Contact from '../routes/contact/contact';
import NotFound from '../routes/not-found/not-found';

class ComingSoon extends React.PureComponent {
  render() {
    return <p>Coming soon...</p>;
  }
}

class AppBody extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route
          component={ComingSoon}
          exact
          path="/"
          sensitive
          strict
        />
        <Route
          component={ComingSoon}
          exact
          path="/gallery"
          sensitive
          strict
        />
        <Route
          component={Contact}
          exact
          path="/contact"
          sensitive
          strict
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default AppBody;
