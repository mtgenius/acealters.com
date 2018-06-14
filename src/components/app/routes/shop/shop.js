import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Link from 'react-router-dom/Link';
import cards from './shop-cards';
import shopStyles from './shop-styles';

const EVENT_LISTENER_OPTIONS = {
  passive: true
};

class Shop extends React.PureComponent {

  constructor(props) {
    super(props);
    this.gridListTitleBarClasses = (classes) => {
      if (classes.actionIcon !== this.gridListTitleBarClassesCache.actionIcon) {
        this.gridListTitleBarClassesCache = {
          ...this.gridListTitleBarClassesCache,
          actionIcon: classes.actionIcon
        };
      }
      return this.gridListTitleBarClassesCache;
    };
    this.gridListTitleBarClassesCache = {};
    this.mapCards = this.mapCards.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.state = {
      cols: this.cols
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize, EVENT_LISTENER_OPTIONS);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize, EVENT_LISTENER_OPTIONS);
  }

  get cols() {
    return Math.ceil(window.document.body.clientWidth / 465);
  }

  handleWindowResize() {
    const cols = this.cols;
    if (cols !== this.state.cols) {
      this.setState({ cols });
    }
  }

  mapCards(card) {
    return (
      <GridListTile
        cols={1}
        component={Link}
        rows={2}
        to={'/cards/' + card.url}
      >
        <img
          alt={card.title}
          src={card.image}
        />
        <GridListTileBar
          actionIcon={card.price}
          classes={this.gridListTitleBarClasses({
            actionIcon: this.props.classes.actionIcon
          })}
          title={card.title}
          titlePosition="top"
        />
      </GridListTile>
    );
  }

  render() {
    return [
      <Paper
        className={this.props.classes.paper}
        key={0}
      >
        <Typography>
          Welcome to AceAlters, where Ace alters Magic cards.{' '}
          You are viewing the Shop, a list of cards that are <strong>for sale</strong>.{' '}
          You may visit the <Link to="/gallery" title="AceAlters Gallery">Gallery</Link> to see a display of all other cards.
        </Typography>
      </Paper>,
      <Paper
        className={this.props.classes.paper}
        key={1}
      >
        <GridList
          cellHeight={155}
          children={cards.map(this.mapCards)}
          cols={this.state.cols}
          spacing={1}
        />
      </Paper>
    ];
  }
}

export default withStyles(shopStyles)(Shop);
