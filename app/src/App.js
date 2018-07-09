import React, {Component} from 'react';
import {Button, List} from 'antd-mobile';
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
      listHeader:'表头',
      listFooter:'表脚'
    };
    this.addSolder = this.addSolder.bind (this);
  }
  componentWillMount () {
    console.log ('组件马上就要加载了');
  }
  componentDidMount () {
    console.log ('组件加载完毕');
  }
  addSolder () {
    this.setState ({
      solders: [...this.state.solders, '新添加的' + Math.random ()]
    });
  }
  render () {
    console.log ('组件正在加载');
    return (
      <div>
        <h2>营长：{this.props.boss}</h2>
        <Button type="primary" onClick={this.addSolder.bind (this)}>添加</Button>
        <List renderHeader={()=>this.state.listHeader} renderFooter={()=>this.state.listFooter}>
          {this.state.solders.map (v => <List.Item key={v}>{v}</List.Item>)}
        </List>
        {/* <ul>
          {this.state.solders.map(v=><li key={v}>{v}</li>)}
        </ul> */}
      </div>
    );
  }
}

export default App;
