import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import cards from '../../assets/cards';
// import CardDescription from './description/card-description';
import CardImage from './image/card-image';
import CardPrice from './price/card-price';
import cardStyles from './card-styles';

const card2state = card => ({
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

  get originalSrc() {
    if (this.state.original) {
      return this.state.original;
    }
    // return `https://i.mtgeni.us/${this.state.multiverseid}.jpg`;
    return `https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${this.state.multiverseid}&type=card`;
  }

  render() {
    document.title = `${this.state.title} (${this.state.set})`;
    return (
      <Paper className={this.props.classes.root}>
        <Link
          className={this.props.classes.back}
          title="Back to Gallery"
          to="/"
        >
          <span className={this.props.classes.backIcon}>
            ➠
          </span>{' '}
          Gallery
        </Link>
        <Typography
          className={this.props.classes.title}
          component="h2"
          paragraph
          variant="headline"
        >
          {this.state.title} ({this.state.set})
        </Typography>
        <CardPrice
          price={this.state.price}
          sold={this.state.sold}
        />
        {/*
        <CardDescription>
          {this.state.description}
        </CardDescription>
        */}
        <div className={this.props.classes.comparison}>
          <div>
            <img
              alt={`Original ${this.state.title}`}
              height={311}
              src={this.originalSrc}
              title={`Original ${this.state.title}`}
              width={223}
            />
          </div>
          <div>
            <img
              alt={`Altered ${this.state.title}`}
              height={311}
              src={this.state.images[0]}
              title={`Altered ${this.state.title}`}
              width={223}
            />
          </div>
        </div>
        <CardImage
          href={this.state.images[2] || this.state.images[1]}
          src={this.state.images[1]}
          title={this.state.title}
        />
        {/*
        <Typography className={this.props.classes.date}>
          Altered on {this.state.date}.
        </Typography>
        */}
      </Paper>
    );
  }
}

export default withStyles(cardStyles)(Card);
