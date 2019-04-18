import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { todoSaga } from './sagas/todo';

const logger = store => next => action => {
  console.log(action);

  return next(action);
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(todoSaga);