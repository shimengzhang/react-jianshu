import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommondList: [],
  articlePage: 1,
  showScroll: false,
});

const changeList = (state, action) => (
  state.merge({
    topicList: fromJS(action.value.topicList),
    articleList: fromJS(action.value.articleList),
    recommondList: fromJS(action.value.recommondList),
  })
);

const changeArticleList = (state, action) => (
  state.merge({
    articleList: state.get('articleList').concat(fromJS(action.value)),
    articlePage: action.nextPage,
  })
);

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      return changeList(state, action);
    case actionTypes.CHANGE_ARTICLE_LIST:
      return changeArticleList(state, action);
    case actionTypes.CHANGE_TOP_SHOW:
      return state.set('showScroll', action.value);
    default:
      return state;
  }
};
