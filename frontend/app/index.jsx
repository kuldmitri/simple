import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

