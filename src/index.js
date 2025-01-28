import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './register-service-worker';
import App from './components/app/app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

unregister();
