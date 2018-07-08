import React, {Component} from 'react';

class App extends Component {
  render () {
    const boss = '李云龙';
    return (
      <div>
        <h2>团长:{boss}</h2>
        <One boss="张大喵" />
      </div>
    );
  }
}

class One extends Component {
  constructor (props) {
    super (props);
    this.state = {
      solders: ['虎子', '柱子', '五根生'],
    };
  }
  render () {
    return (
      <div>
        <h2>营长：{this.props.boss}</h2>
        <ul>
          {this.state.solders.map(v=><li key={v}>{v}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
