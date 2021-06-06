
const initialState = {
    tasks: [],
    count: 0
  }


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
      case 'ADD_TASK':
        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }

      case 'REMOVE_TASK':
        return {
            ...state,
            tasks: state.tasks.slice(0, action.index).concat(state.tasks.slice(action.index + 1))
        }

      default: 
        return state
    }
  }

  export const actionCreaterAddTask = (payload) => ({
      type: 'ADD_TASK',
      payload
  })
  export const actionCreaterRemoveTask = (index) => ({
      type: 'REMOVE_TASK',
      index
  })
