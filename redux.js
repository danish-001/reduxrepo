const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore //To create a store
//To combine multiple reducers as store takes only 1 reducer
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware()
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'Buying a cake'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

// (PreviousState, action) => newState
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// Reducer
// const reducer = (state = { initialState }, action) => {
//   switch (action.type) {
//     case BUY_CAKE: 
//       return {
//       numOfCakes: state.numOfCakes - 1
//       }
//     case BUY_ICECREAM: 
//       return {
//       numOfIceCreams: state.numOfIceCreams - 1
//       }
//     default:
//       return state
//   }
// }

const cakeReducer = (state = { initialCakeState }, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

const iceCreamReducer = (state = { initialIceCreamState }, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIceCreams: state.numOfIceCreams - 1,
      }
    default:
      return state
  }
}

const rootReducer = combineReducer({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

//Store 
const store = createStore(rootReducer, applyMiddleware(logger))
//Getting initial state
console.log('Initial State', store.getState())
//Subscribe methos takes a function as a parameter
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
//To update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()