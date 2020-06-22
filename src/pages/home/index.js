import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommond from './components/Recommond';
import Topic from './components/Topic';
import Writter from './components/Writter';
import * as actionCreator from './store/actionCreator';

import {
  HomeWrapper, HomeLeft, HomeRight, BackTop,
} from './style';

// class Home extends PureComponent {
//   handleScrollTop() {
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//       <HomeWrapper>
//         <HomeLeft>
//           <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4980/b3ecc0ffbfbe8e6e73295a9207bd7a95aa4dc938.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
//           <Topic></Topic>
//           <List></List>
//         </HomeLeft>
//         <HomeRight>
//           <Recommond></Recommond>
//           <Writter></Writter>
//         </HomeRight>
//         {
//           this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null
//         }
//       </HomeWrapper>
//     );
//   }

//   componentDidMount() {
//     this.props.handleGetList();
//     this.bindEvents();
//   }

//   componentWillUnmount() {
//     this.unbindEvents();
//   }

//   bindEvents() {
//     window.addEventListener('scroll', this.props.changeScrollTopShow);
//   }

//   unbindEvents() {
//     window.removeEventListener('scroll', this.props.changeScrollTopShow);
//   }
// }

function handleScrollTop() {
  window.scrollTo(0, 0);
}

const Home = memo((props) => {
  const { showScroll, handleGetList, changeScrollTopShow } = props;

  useEffect(() => {
    handleGetList();
    window.addEventListener('scroll', changeScrollTopShow);
    return () => {
      window.removeEventListener('scroll', changeScrollTopShow);
    };
  }, []);

  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4980/b3ecc0ffbfbe8e6e73295a9207bd7a95aa4dc938.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic></Topic>
        <List></List>
      </HomeLeft>
      <HomeRight>
        <Recommond></Recommond>
        <Writter></Writter>
      </HomeRight>
      {
        showScroll ? <BackTop onClick={handleScrollTop}>返回顶部</BackTop> : null
      }
    </HomeWrapper>
  );
});

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatchToProps = (dispatch) => ({
  handleGetList() {
    dispatch(actionCreator.getListAction());
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.toggleTopShowAction(true));
    } else {
      dispatch(actionCreator.toggleTopShowAction(false));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
