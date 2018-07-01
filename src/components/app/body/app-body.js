import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Contact from '../routes/contact/contact';
import Gallery from '../routes/gallery/gallery';
import NotFound from '../routes/not-found/not-found';
import appBodyStyles from './app-body-styles';

class AppBody extends React.PureComponent {
  render() {
    return (
      <main className={this.props.classes.root}>
        <Switch>
          <Route
            component={Gallery}
            exact
            path="/"
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
      </main>
    );
  }
}

export default withStyles(appBodyStyles)(AppBody);
