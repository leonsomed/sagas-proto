import { createAction } from 'redux-actions';

export const getTodos = createAction('getTodos');
export const getTodosSuccess = createAction('getTodosSuccess');
export const getTodosFailed = createAction('getTodosFailed');