import { combineReducers } from 'redux';
import dateReducer from './reducer_date';

export default combineReducers({
  date: dateReducer
});