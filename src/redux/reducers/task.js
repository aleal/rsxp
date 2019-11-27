import { SET_TASK_RESULT } from "../actions/types";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TASK_RESULT:
      return {
        ...state,
        taskResult: action.payload
      };
    default:
      return state;
  }
}
