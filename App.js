import React, { Component } from 'react';
import { Provider } from 'react-redux';

import FeedComponent from './src/components/FeedComponent';
import store from './src/store/index';


// mount it on the Store
export default () => (
  <Provider store={store}>
      <FeedComponent />
  </Provider>
);

