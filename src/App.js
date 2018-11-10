import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    console.log("构造函数执行");
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
    this.setState({
      num: this.state.num + 1
    });
    console.log("xxxx");
  }
  render() {
    console.log("render 执行中");
    //每次渲染render，bind都会执行一次
    const item = { react: "redux" };
    return (
      <div>
        <h2>
          App
          {this.state.num}
        </h2>
        <button onClick={this.handleClick}>Btn0</button>
        {/* <button onClick={this.handleClick.bind(this,'btn1')}>Btn1</button> */}
        <button onClick={() => this.handleClick('btn2')}>Btn2</button>
        <p>每一次都会生成新的对象传递</p>
        {/* <Demo name={{ract:'redux'}}/> */}
        {/* 推荐下面 这种写法 */}
        <Demo name={item} />
      </div>
    );
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>I am Demo</h2>
        <h2>{this.props.name.react}</h2>
      </div>
    );
  }
}
export default App;
