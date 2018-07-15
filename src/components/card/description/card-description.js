import Typography from '@material-ui/core/Typography';
import React from 'react';

export default class CardDescription extends React.PureComponent {
  render() {

    // No description.
    if (this.props.children === null) {
      return null;
    }

    return (
      <Typography
        children={this.props.children}
        paragraph
      />
    );
  }
}
