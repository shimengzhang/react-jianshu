import React, { PureComponent, memo, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  LoginWrapper, LoginBox, Input, Button,
} from './style';
import { actionCreators } from './store';

// class Login extends PureComponent {
//   render() {
//     const { loginStatus } = this.props;
//     if (!loginStatus) {
//       return (
//         <LoginWrapper>
//           <LoginBox>
//             <Input placeholder='账号' ref={(input) => { this.account = input; }}/>
//             <Input placeholder='密码' type='password' ref={(input) => { this.password = input; }}/>
//             <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
//           </LoginBox>
//         </LoginWrapper>
//       );
//     }
//     return <Redirect to='/'/>;
//   }
// }

const Login = memo((props) => {
  const { loginStatus, login } = props;
  const accountRef = useRef();
  const passwordRef = useRef();
  if (!loginStatus) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' ref={accountRef}/>
          <Input placeholder='密码' type='password' ref={passwordRef}/>
          <Button onClick={() => login(accountRef, passwordRef)}>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
  return <Redirect to='/'/>;
});

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
});

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    console.log('login:', accountElem.current.value, passwordElem.current.value);
    dispatch(actionCreators.login(accountElem.current.value, passwordElem.current.value));
  },
});

export default connect(mapState, mapDispatch)(Login);
