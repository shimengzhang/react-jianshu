import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 引入 styled-components 进行模块管理
import { Globalstyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <GlobalFontStyle />
    <App />
  </Fragment>,
  document.getElementById('root'),
);
