import React from 'react';
import ReactDOM from 'react-dom';
import ReactPortfolio from 'react-portfolio';
import App from './components/app/app';
import registerServiceWorker from './register-service-worker';

const footer = [
  {
    children: 'Ace Quisido',
    href: 'https://quisido.com/',
    title: 'Quisido.com'
  }
];

ReactDOM.render(
  <ReactPortfolio
    app={App}
    copyright={2016}
    footer={footer}
  />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
