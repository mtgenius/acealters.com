import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import createObjectProp from 'react-object-prop';
import Link from 'react-router-dom/Link';
import cards from '../../assets/cards';
import galleryStyles from './gallery-styles';

const EVENT_LISTENER_OPTIONS = {
  passive: true
};

const galleryCards = [];

const HEIGHT = 223;

const shopCards = [];

const SPACING = 24;

const WIDTH = 223;

// Generate gallery and shop.
for (const card of cards) {
  if (card.sold) {
    galleryCards.push(card);
  }
  else {
    shopCards.push(card);
  }
}

class Gallery extends React.PureComponent {

  constructor(props) {
    super(props);
    this.gridListTileClasses = createObjectProp();
    this.gridListTitleBarClasses = createObjectProp();
    this.gridListWrapper = null;
    this.handleGridListWrapperRef = this.handleGridListWrapperRef.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.mapCards = this.mapCards.bind(this);
    this.state = {
      cols: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize, EVENT_LISTENER_OPTIONS);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize, EVENT_LISTENER_OPTIONS);
  }

  get cols() {
    if (!this.gridListWrapper) {
      return 0;
    }
    const maxWidth = Math.max(0, this.gridListWrapper.clientWidth - WIDTH);
    return WIDTH * (Math.floor(maxWidth / (WIDTH + SPACING)) + 1);
  }

  handleGridListWrapperRef(gridListWrapper) {
    this.gridListWrapper = gridListWrapper;
    this.handleWindowResize();
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
        classes={this.gridListTileClasses({
          imgFullWidth:
            this.props.classes.imgFullWidth +
            (card.bodyShown ? ' ' + this.props.classes.imgBodyShown : ''),
          root: this.props.classes.gridListTileRoot,
          tile: this.props.classes.gridListTileTile
        })}
        cols={WIDTH}
        component={Link}
        rows={HEIGHT}
        to={'./' + card.url + '/'}
      >
        <img
          alt={card.title}
          className={this.props.classes.image}
          src={card.images[0]}
        />
        {
          card.titleShown === false ?
            <GridListTileBar
              classes={this.gridListTitleBarClasses({
                actionIcon: this.props.classes.actionIcon,
                root: this.props.classes.gridListTileBar
              })}
              title={card.title}
              titlePosition="top"
            /> :
            null
        }
      </GridListTile>
    );
  }

  render() {
    document.title = 'AceAlters';
    return (
      <React.Fragment>
        <Paper className={this.props.classes.paper}>
          <Typography>
            AceAlters is a gallery of cards from the{' '}
            <em>Magic: The Gathering</em>{' '}
            collectible card game as altered by{' '}
            <a
              href="https://quisido.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Ace Quisido's Portfolio"
            >
              Ace Quisido
            </a>.
          </Typography>
        </Paper>
        {
          shopCards.length > 0 ?
            <Paper
              className={this.props.classes.paper}
              key="shop"
            >
              <Typography
                children="Shop / For Sale"
                className={this.props.classes.title}
                variant="title"
              />
              <GridList
                cellHeight={1}
                children={shopCards.map(this.mapCards)}
                cols={this.state.cols}
                spacing={SPACING}
              />
            </Paper> :
            null
        }
        <Paper
          className={this.props.classes.paper}
          key="gallery"
        >
          <Typography
            children="Gallery / Not For Sale"
            className={this.props.classes.title}
            variant="title"
          />
          <div ref={this.handleGridListWrapperRef}>
            {
              this.state.cols ?
                <GridList
                  cellHeight={1}
                  children={galleryCards.map(this.mapCards)}
                  cols={this.state.cols}
                  component="div"
                  spacing={SPACING}
                /> :
                null
            }
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(galleryStyles)(Gallery);
