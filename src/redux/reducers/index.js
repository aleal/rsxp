import { combineReducers } from 'redux';
import task from './task';
import data from './data';

export default combineReducers({ task, data });
