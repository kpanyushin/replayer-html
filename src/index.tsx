import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { createRootReducer } from '_redux';

import routes from './routes';

import App from 'components/App';

import './index.scss';
import './normalize.scss';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
const store = configureStore({
  reducer: createRootReducer(),
  // preloadedState: {},
  middleware,
  devTools: true,
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App routes={routes} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
