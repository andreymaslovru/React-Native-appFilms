import {ACTION_1, ACTION_2} from './actions'


const initialState = {
    counter: 0,
  }
  
export const reducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_1:
        return {...state, counter: state.counter + 1}
  
      case ACTION_2:
        return {...state, counter: state.counter - 1}
  
      default: 
        return state
    }
  }
