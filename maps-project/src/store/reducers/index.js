import { combineReducers } from 'redux';
import dateReducer from './reducer_date';
import preferencesReducer from './reducer_preferences';

export default combineReducers({
  date: dateReducer,
  preferences: preferencesReducer
});