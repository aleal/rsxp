import { SET_TASK_RESULT, SET_DATA } from './types';
export function setTaskResults(result) {
  return {
    type: SET_TASK_RESULT,
    payload: result,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
