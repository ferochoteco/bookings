import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/utils/configureStore';
import AppNavigator from './src/components/AppNavigator';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;