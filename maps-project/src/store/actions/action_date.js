import DataService from '../../data/services/dataService';
import { SET_DATE } from '../actions/ActionTypes';

export const getDate = () => async dispatch => {
  const { data } = await DataService.fetchData();
  console.log(data);
  dispatch({ type: SET_DATE, data });
}

