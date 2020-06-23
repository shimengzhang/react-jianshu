import React, { PureComponent, memo } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// class Write extends PureComponent {
//   render() {
//     const { loginStatus } = this.props;
//     if (loginStatus) {
//       return (
//         <div>写文章页面</div>
//       );
//     }
//     return <Redirect to='/login'/>;
//   }
// }

const Write = memo((props) => {
  const { loginStatus } = props;
  if (loginStatus) {
    return (
        <div>写文章页面</div>
    );
  }
  return <Redirect to='/login'/>;
});

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
});

export default connect(mapState, null)(Write);
