import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button,
  SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch,
  SearchInfoItem, SearchInfoList,
} from './style';

let isFirstFocus = true;

class Header extends PureComponent {
  render() {
    const {
      focused, handleSearchBlur, handleSearchFocus, login, logout,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login
              ? <NavItem onClick={logout} className='right'>退出</NavItem>
              : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
          }
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onBlur={handleSearchBlur}
                onFocus={handleSearchFocus}
                className={focused ? 'focused' : ''}>
              </NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing"><span className="iconfont">&#xe708;</span>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  getListArea() {
    const {
      focused, mouseIn, handleInfoMouseEnter, handleInfoMouseOut, handleInfoSwitch,
    } = this.props;
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleInfoMouseEnter}
          onMouseLeave={handleInfoMouseOut}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleInfoSwitch(this.spinIcon); }}>
              <span ref={(icon) => { this.spinIcon = icon; }} className="iconfont spin">&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
            {this.getSearchInfoItem()}
          </SearchInfoList>
        </SearchInfo>
      );
    }
    return null;
  }

  getSearchInfoItem() {
    const { page, list } = this.props;
    const start = (page - 1) * 10;
    const end = page * 10;
    const pageList = list.slice(start, end);
    return (
      pageList.map((item, index) => <SearchInfoItem key={index}>{item}</SearchInfoItem>)
    );
  }
}

const mapStateToProps = (state) => ({
  // focused: state.header.focused,
  // focused: state.header.get('focused'),
  // focused: state.get('header').get('focused'),
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  mouseIn: state.getIn(['header', 'mouseIn']),
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchBlur() {
    dispatch(actionCreator.getInputBlurAction());
  },
  handleSearchFocus(e) {
    if (isFirstFocus) {
      dispatch(actionCreator.getListAction());
      isFirstFocus = false;
    }

    dispatch(actionCreator.getInputFocusAction());
  },
  handleInfoSwitch(spin) {
    const originAngle = +spin.style.transform.replace(/[^0-9]/g, '');
    spin.style.transform = `rotate(${originAngle + 360}deg)`;
    dispatch(actionCreator.getInfoSwitchAction());
  },
  handleInfoMouseEnter() {
    dispatch(actionCreator.getInfoMouseEnterAction());
  },
  handleInfoMouseOut() {
    dispatch(actionCreator.getInfoMouseOutAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
