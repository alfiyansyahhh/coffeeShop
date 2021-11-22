import { createStore, combineReducers, applyMiddleware } from 'redux'
import productsReducer from './reducers/products'
import cartReducer from './reducers/cart'
import transactionsReducer from './reducers/transactions'
import usersReducer from './reducers/users'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
    transactions: transactionsReducer
})
const middleware = applyMiddleware(thunk,logger)
const store = createStore(reducers, middleware)

export default store