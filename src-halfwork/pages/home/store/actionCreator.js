import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getListAction = () => (dispatch) => {
  axios.get('/api/home.json').then((res) => {
    const { data } = res;
    dispatch(changeListAction(data.result));
  }).catch((e) => {
    console.log(e);
  });
};

export const getMoreListAction = (page) => (dispatch) => {
  axios.get(`/api/homeList.json?page=${page}`).then((res) => {
    const { data } = res;
    dispatch(changeArticleListAction(data.result, page + 1));
  }).catch((e) => {
    console.log(e);
  });
};

export const toggleTopShowAction = (isShow) => (dispatch) => {
  dispatch(changeTopShowAction(isShow));
};

const changeListAction = (data) => ({
  type: actionTypes.CHANGE_LIST,
  value: data,
});

const changeTopShowAction = (data) => ({
  type: actionTypes.CHANGE_TOP_SHOW,
  value: data,
});

const changeArticleListAction = (data, nextPage) => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  value: data,
  nextPage,
});
