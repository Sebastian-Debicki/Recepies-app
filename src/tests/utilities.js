import reducers from '../store/reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore)
  return createStoreWithMiddleware(reducers, initialState)
}