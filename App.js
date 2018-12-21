import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/utils/configureStore';
import { AppNavigator, middleware } from './app/components/AppNavigator';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;