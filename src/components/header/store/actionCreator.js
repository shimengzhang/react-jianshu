import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

export const getInputFocusAction = () => ({
  type: actionTypes.SEARCH_INPUT_FOCUS,
  value: true,
});

export const getInputBlurAction = () => ({
  type: actionTypes.SEARCH_INPUT_BLUR,
  value: false,
});

export const getListAction = () => (dispatch) => {
  axios.get('/api/headerList.json').then((res) => {
    const { data } = res;
    dispatch(changeListAction(data));
  }).catch((e) => {
    console.log(e);
  });
};

export const getInfoSwitchAction = () => ({
  type: actionTypes.INFO_SWITCH,
});

export const getInfoMouseEnterAction = () => ({
  type: actionTypes.INFO_MOUSE_ENTER,
});

export const getInfoMouseOutAction = () => ({
  type: actionTypes.INFO_MOUSE_OUT,
});

const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  value: fromJS(data),
  totalPage: Math.ceil(data.length / 10),
});
