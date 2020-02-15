import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore)

export default createStoreWithMiddleware(reducers);