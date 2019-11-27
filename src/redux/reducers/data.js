import { SET_DATA } from '../actions/types';
import data from '../../../data';

function getData() {
  const storageData = localStorage.getItem('data');
  return storageData ? JSON.parse(storageData) : null;
}
const initialState = getData() || data;

export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
