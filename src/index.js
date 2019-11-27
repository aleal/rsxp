import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import App from './App';

const store = configStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
