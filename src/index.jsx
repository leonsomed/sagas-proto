import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './components/root';
import { store } from './redux/store';

const root = (
  <Provider store={store}>
    <Root />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
