const redux = require('redux') 
import {configureStore} from './store'; 

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const initialState = {
    numofCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numofCakes: state.numofCakes - 1
            }
            default:
              return state
    }
}

const store =  configureStore(reducer)
console.log('Initial state', store.getState())


const unsubscibe = store.subscribe(() => console.log('pdate', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscibe()