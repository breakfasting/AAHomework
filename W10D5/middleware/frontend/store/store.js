import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log('next:', next);
  next(action);
  console.log(store.getState())
}

const addLoggingToDispatch2 = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log('next:', next);
  next(action);
  console.log(store.getState())
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, addLoggingToDispatch2));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
