import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = () => {
  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
  });

  const store = applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )(createStore)(reducer);

  return store;
};

export default configureStore;
