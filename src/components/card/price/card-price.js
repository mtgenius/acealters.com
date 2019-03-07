import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import cardPriceStyles from './card-price-styles';

class CardPrice extends React.PureComponent {

  get priceClassName() {
    if (this.props.sold) {
      return this.props.classes.sold;
    }
    return null;
  }

  get sold() {
    if (this.props.sold) {
      return ' Sold';
    }
    return null;
  }

  render() {

    // No price.
    if (this.props.price === null) {
      return null;
    }

    const price = '$' + this.props.price.toFixed(2);

    return (
      <Typography
        className={this.props.classes.root}
        paragraph
        title={price}
        variant="subheading"
      >
        <span
          children={price}
          className={this.priceClassName}
        />
        {this.sold}
      </Typography>
    );
  }
}

export default withStyles(cardPriceStyles)(CardPrice);
