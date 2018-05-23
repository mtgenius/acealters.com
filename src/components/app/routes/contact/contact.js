import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Link from 'react-router-dom/Link';
import contactStyles from './contact-styles';

class Contact extends React.PureComponent {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography paragraph>You may contact Ace through e-mail at <a href="mailto:ace@quisido.com">ace@quisido.com</a>.</Typography>
        <Typography><Link to="/">Return to the Shop.</Link></Typography>
      </Paper>
    );
  }
}

export default withStyles(contactStyles)(Contact);
