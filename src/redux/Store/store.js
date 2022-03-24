import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import productsDataReducer from './productsDataReducer'

const rootReducer = combineReducers({
    store_products: productsDataReducer,
})

const composeEnhancers = composeWithDevTools || compose;
//window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ 

const generateStore = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}

export default generateStore;

//El middle weat Thunk es el mas utilizado hablando de peticiones Asincronas
//Con este middle wear Thunk podemos interceptar las diferentes acctiones de ProductsActions