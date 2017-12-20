import { SET_DRAWER } from '../actions/ActionTypes';

const INITIAL_STATE = {
  drawerOpen: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }
    default:
      return state;
  }
};