import React from 'react';
import ReactPortfolio from 'react-portfolio';
import cards from '../../assets/cards';
import Card from '../card/card';
// import Contact from '../contact/contact';
import Gallery from '../gallery/gallery';
import NotFound from '../not-found/not-found';

const footer = [
  {
    children: 'Jaq Quisido',
    href: 'https://quisido.com/',
    title: 'Jaq Quisido\'s Portfolio'
  }
];

const nav = [/*
  {
    path: '/',
    title: 'Gallery'
  },
  {
    path: '/contact',
    title: 'Contact'
  }
*/];

const routes = [
  {
    component: Card,
    path: '/:card(' + cards.map((card) => card.url).join('|') + ')/'
  },
  {
    component: Gallery,
    path: '/'
  },
  /*
  {
    component: Contact,
    path: '/contact'
  },
  */
  {
    component: NotFound
  }
];

const social = {
  email: 'jaq@quisido.com',
  linkedin: 'acequisido',
};

class App extends React.PureComponent {
  render() {
    return (
      <ReactPortfolio
        copyright={2016}
        footer={footer}
        hue={0}
        nav={nav}
        routes={routes}
        social={social}
        title="AceAlters"
      />
    );
  }
}

export default App;
