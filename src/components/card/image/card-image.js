import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';
import cardImageStyles from './card-image-styles';

class CardImage extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.root}>
        <a
          className={this.props.classes.link}
          href={this.props.src}
          rel="noopener noreferrer"
          title={this.props.title}
        >
          <img
            alt={this.props.title}
            className={this.props.classes.image}
            src={this.props.src}
          />
        </a>
      </div>
    );
  }
}

export default withStyles(cardImageStyles)(CardImage);
