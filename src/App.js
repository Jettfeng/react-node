import React, { Component,PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: "imooc"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  handleClick(e) {
    this.setState({
      num: this.state.num + 1
    });
    console.log("xxxx");
  }
  handleTitle() {
    this.setState({
      title: this.state.title + "!"
    });
  }
  render() {
    return (
      <div>
        <h2>
          App
          {this.state.num}
        </h2>
        <button onClick={this.handleClick}>BtnNum</button>
        <button onClick={this.handleTitle}>BtnTitle</button>
        <Demo title={this.state.title} />
      </div>
    );
  }
}
// 方法一
// class Demo extends Component {
//   constructor(props) {
//     super(props);
//   }
//   // 利用shouldComponentUpdate判断数据子组件接收的数据有没有变化，如果没变化，就不执行render
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextProps);
//     console.log(nextState);
//     if (nextProps.title == this.props.title) {
//       return false;
//     }
//     return true;
//   }
//   render() {
//     console.log("demo render执行中");
//     return (
//       <div>
//         <h2>
//           I am Demo,
//           {this.props.title}
//         </h2>
//       </div>
//     );
//   }
// }
// 方法二
class Demo extends PureComponent {
  constructor(props) {
    super(props);
  }
  // 利用PureComponente
 
  render() {
    console.log("demo render执行中");
    return (
      <div>
        <h2>
          I am Demo,
          {this.props.title}
        </h2>
      </div>
    );
  }
}
export default App;
