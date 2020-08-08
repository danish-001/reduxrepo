const BUY_CAKE = 'BUY_CAKE'

//Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Buying a cake'
  }
}

// (PreviousState, action) => newState
const initialState = {
  numOfCakes: 10
}

// Reducer
const reducer = (state = { initialState }, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
      numOfCakes: state.numOfCakes + 1
      }
    default:
      return state
  }
}