import { SET_TASK_RESULT } from "./types";
export function setTaskResults(result) {
  return {
    type: SET_TASK_RESULT,
    payload: result
  };
}
