import cards from './assets/cards';

const reduceCardsToPages = (pages, card) => ({
  ...pages,
  [card.url]: {
    title: `${card.title} (${card.set})`,
  },
});

export default {
  pages: cards.reduce(
    reduceCardsToPages,
    Object.create(null)
  )
};
