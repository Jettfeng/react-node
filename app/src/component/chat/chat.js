import React from 'react';
import io from 'socket.io-client';
class Chat extends React.Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    //   建立连接
    const socket = io ('ws://localhost:9093');
  }
  render () {
    return <div>chat with user:{this.props.match.params.user}</div>;
  }
}

export default Chat;
