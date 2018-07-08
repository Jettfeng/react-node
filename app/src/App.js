import React, {Component} from 'react';

class App extends Component {
  render () {
    const boss = '李云龙';
    return (
      <div>
        <h2>团长:{boss}</h2>
        <One />
      </div>
    );
  }
}

class One extends Component {
  render () {
    const boss = '大瞄';
    return <h2>营长：{boss}</h2>;
  }
}

export default App;
