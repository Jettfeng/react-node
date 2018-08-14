import React from 'react';
import {connect} from 'react-redux';

@connect (state => state)
class Msg extends React.Component {
  componentDidMount () {
    console.log (this.props);
  }
  render () {
    const msgGroup = {};
    this.props.chat.chatmsg.forEach (v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push (v);
    });
    console.log(msgGroup);
    
    //按照聊天用户分组，根据chatid
    return <div>Msg</div>;
  }
}

export default Msg;
