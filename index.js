const redux = require('redux')
const createStore = redux.createStore() //To create a store

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

//Store
const store = createStore(reducer)
//Getting initial state
console.log('Initial State', store.getState())
//Subscribe methos takes a function as a parameter
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
//To update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()