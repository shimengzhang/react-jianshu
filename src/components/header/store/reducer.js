import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_INPUT_FOCUS:
    case actionTypes.SEARCH_INPUT_BLUR:
      return state.set('focused', action.value);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.value,
        totalPage: action.totalPage,
      });
      // return state.set('list', action.value).set('totalPage', action.totalPage);
    case actionTypes.INFO_SWITCH:
      return state.set('page', state.get('page') % state.get('totalPage') + 1);
    case actionTypes.INFO_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.INFO_MOUSE_OUT:
      return state.set('mouseIn', false);
    default:
      return state;
  }
  // if (action.type === actionTypes.SEARCH_INPUT_FOCUS) {
  //   // const newState = JSON.parse(JSON.stringify(state));
  //   // newState.focused = action.value;
  //   // return newState;
  //   return state.set('focused', action.value);
  // }
  // if (action.type === actionTypes.SEARCH_INPUT_BLUR) {
  //   return state.set('focused', action.value);
  // }
  // if (action.type === actionTypes.CHANGE_LIST) {
  //   return state.set('list', action.value);
  // }
  // return state;
};
