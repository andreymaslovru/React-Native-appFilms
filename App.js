import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavContainer} from './src/navigations/AppNavContainer';
import {Provider} from 'react-redux'
import {createStore} from 'redux'



const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT_COUNTER":
      return {...state, counter: state.counter + 1}

    case "DECREMENT_COUNTER":
      return {...state, counter: state.counter - 1}

    default: 
      return state
  }
}

const store = createStore(reducer)

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

