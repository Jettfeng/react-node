import React from 'react';
import {connect} from 'react-redux';
import {Result,List,WhiteSpace,Modal} from 'antd-mobile';
import browserCookie from 'browser-cookies'
import { relative } from 'path';

@connect(
	state=>state.user,
)
class User extends React.Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
        this.state = {}
    }
    componentDidMount(){
        console.log(this.props);
    }
    logout(e){
        const alert = Modal.alert
        alert('注销', '确认退出吗?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => {
                browserCookie.erase('userid')
                window.location.href = window.location.href
            }},
          ])
        // browserCookie.erase('userid')
        
    }
  render () {
      const props = this.props
      const Item= List.Item
      const Brief = Item.Brief;
    return props.user?(
      <div>
        <Result
          img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50,height:50}} />}
          title={props.user}
          message={props.type=='boss'?props.company:null}
        />
        <List renderHeader={()=>'简介'}>
            <Item multipleLine>
                {props.title}
                <Brief>{props.desc}</Brief>
                {props.money? <Brief>薪资:{props.money}</Brief>:null}
            </Item>
        </List>
        <WhiteSpace />
        <List>
        <Item style={{position:relative,zIndex:1}} onClick={this.logout}>退出登录</Item>
        </List>
      </div>
    ):null;
  }
}

export default User;
