import { call, put, takeEvery } from 'redux-saga/effects';
import { getTodos, getTodosSuccess, getTodosFailed } from '../actions';

async function apiCall() {
  return [
    {
      _id: 1,
      name: 'wow',
    },
    {
      _id: 2,
      name: 'leo',
    },
  ];
}

function* fetchTodos(action) {
  try {
     const todos = yield call(apiCall);

     yield put(getTodosSuccess(todos));
  } catch (e) {
     yield put(getTodosFailed(e.message));
  }
}

export function* todoSaga() {
  yield takeEvery(getTodos.toString(), fetchTodos);
}