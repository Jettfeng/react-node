import React from 'react';

class Chat extends React.Component {
  constructor (props) {
    super (props);
  }
  componentDidMount () {
    console.log (this.props);
  }
  render () {
    return <div>chat with user:{this.props.match.params.user}</div>;
  }
}

export default Chat;
