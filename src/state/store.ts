import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'


export const Store= createStore(
    reducers,
   {},
    applyMiddleware(thunk)
)