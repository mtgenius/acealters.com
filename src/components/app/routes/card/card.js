import cards from 'cards';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import CardDescription from './description/card-description';
import CardImage from './image/card-image';
import CardPrice from './price/card-price';
import cardStyles from './card-styles';

const card2state = (card) => ({
  description: null,
  price: null,
  sold: false,
  ...card
});

class Card extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = card2state(cards[0]);
  }

  static getDerivedStateFromProps(props, state) {
    const index = cards.findIndex((card) => card.url === props.match.params.card);
    if (
      index === -1 ||
      state.url === cards[index].url
    ) {
      return null;
    }
    return card2state(cards[index]);
  }

  get date() {
    return 'Altered on ' + this.state.date + '.';
  }

  get title() {
    return this.state.title + ' (' + this.state.set + ')';
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Typography
          children={this.title}
          className={this.props.classes.title}
          paragraph
          variant="title"
        />
        <CardPrice
          price={this.state.price}
          sold={this.state.sold}
        />
        <CardDescription children={this.state.description} />
        <CardImage
          src={this.state.image}
          title={this.state.title}
        />
        <Typography
          children={this.date}
          className={this.props.classes.date}
        />
      </Paper>
    );
  }
}

export default withStyles(cardStyles)(Card);
