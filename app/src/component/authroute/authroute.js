import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'; //如果不使用withRouter，this.props.history 为undefined
@withRouter class AuthRoute extends React.Component {
  componentDidMount () {
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname; //判断当前路径
    if (publicList.indexOf (pathname) > -1) {
      return;
    }
    //   获取用户信息
    axios.get ('/user/info').then (res => {
      if (res.status == 200) {
        console.log (res.data);
        if (res.data.code == 0) {
          // 有登录信息的
        } else {
          // 没有登录信息的
          console.log (this.props.history);
          this.props.history.push ('/login');
        }
      }
    });
    // 是否登录
    // 现在的url地址  login不需要跳转的

    // 用户的type 身份是boss还是牛人

    // 用户是否完善信息(选择头像 个人简介)
  }
  render () {
    return <p>判断跳转的地方</p>;
  }
}

export default AuthRoute;
