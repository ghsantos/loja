/**
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

const store = createStore(
  AppReducer,
  compose(applyMiddleware(thunk)),
);

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
