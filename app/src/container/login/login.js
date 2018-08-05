import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'

// function hello(){
//   console.log('hello imooc')
// }

// function WrapHello(fn){
//   return function(){
//     console.log('before say hello');
//     fn()
//     console.log('after say hello');
//   }
// }
// hello = WrapHello(hello)
// hello()

// class Hello extends React.Component{
//   render(){
//     return <div>I love React</div>
//   }
// }

function WrapHello(Comp){
  // 反向继承，让WrapHello继承Comp组件，修改组件生命周期
  class WrapComp extends Comp{
     componentDidMount(){
       console.log('高阶组件新增的生命终结期，加载完成');
     }
      render(){
        return <Comp></Comp>
      }
  }
  // 属性代理
  // class WrapComp extends React.Component{
  //   render(){
  //     return(
  //     <div>
  //       <p>这是HOC高阶组件特有的元素</p>
  //       <Comp {...this.props}></Comp>
  //     </div>)
  //   }
  // }
  return WrapComp
}
//Hello = WrapHello(Hello)//方法一：直接传入参数

// 方法二:@+方法+需要包裹的组件
@WrapHello
class Hello extends React.Component{
  render(){
    return <div>I love React</div>
  }
}



@connect(
  state=>state.user,
  {login}
)
class Login extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      user:'',
      pwd:''
    }
    this.register = this.register.bind (this);
    this.handleLogin = this.handleLogin.bind(this)
  }
  register () {
    this.props.history.push ('/register');
  }

  handleChange(key,val){
    this.setState({
      [key]:val
    })
  } 
  handleLogin(){
    this.props.login(this.state)
  }
  render () {
    return (
      <div>
        <Hello />
        {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo}/>:null}
        <Logo />
        <h2>我是登陆页面</h2>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem onChange={(v)=>this.handleChange('user',v)}>用户</InputItem>
            <InputItem onChange={(v)=>this.handleChange('pwd',v)} type='password'>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>登陆</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
