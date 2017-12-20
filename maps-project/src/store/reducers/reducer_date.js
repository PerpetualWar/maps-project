import { SET_DATE } from '../actions/ActionTypes';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATE:
      return [
        ...state,
        action.data
      ]
    default:
      return state;
  }
};