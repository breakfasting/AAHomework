import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// const addLoggingToDispatch = (store) => {
//   let dispatch = store.dispatch
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     dispatch(action);
//     console.log(store.getState())
//   }
// }

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState())
// }

// const applyMiddlewares = (store, list) => {
//   let dispatch = store.dispatch;
//   list.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   })
//   return Object.assign({}, store, { dispatch });
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  // store.dispatch = addLoggingToDispatch(store);
  // store = applyMiddlewares(store, [addLoggingToDispatch])

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
