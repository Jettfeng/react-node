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
    }
    this.addSolder = this.addSolder.bind(this)
  }
  addSolder(){
      this.setState({
        solders:[...this.state.solders,'新添加的'+Math.random()]
      })
  }
  render () {
    return (
      <div>
        <h2>营长：{this.props.boss}</h2>
        <button onClick={this.addSolder.bind(this)}>添加</button>
        <ul>
          {this.state.solders.map(v=><li key={v}>{v}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
