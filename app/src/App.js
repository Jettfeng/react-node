import React, {Component} from 'react';

class App extends Component {
  render () {
    const boss = '李云龙';
    return (
      <div>
        <h2>团长:{boss}</h2>
        <One boss='张大喵' />
      </div>
    );
  }
}

class One extends Component {
  render () {
    return <h2>营长：{this.props.boss}</h2>;
  }
}

export default App;
