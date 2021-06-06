import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavContainer} from './src/navigations/AppNavContainer';
import {Provider} from 'react-redux'
import {createStore} from 'redux'



const initialState = {
  tasks: [],
  query: 'aa',
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "RECEIVE_QUERY":
      return {...state, query: action.query}

    // case "REMOVE_TASK":
    //   return {...state, tasks: tasks.unshift(action.state)}

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

