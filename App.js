import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavContainer} from './src/navigations/AppNavContainer';
import {Provider} from 'react-redux'
import {store} from './src/redux/index'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavContainer />
      </NavigationContainer>
    </Provider>
  );
};


export default App;

