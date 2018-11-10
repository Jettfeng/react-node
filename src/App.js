import React, { Component, PureComponent } from "react";
import { Map, is } from "immutable";
// isImmutable优点
// 1、减少内存使用
// 2、并发安全
// 3、降低项目复杂度
// 4、便于比较复杂数据，定制shouldComponentUpdatte方便
// 5、时间旅行功能方便
// 6、函数式编程
// 缺点
// 1、学习成本
// 2、库的大小
// 3、对现有项目入侵严重
// 4、新项目使用，老项目评估后使用
// ==================================================
// isImmutable判断两个对象是否相等
// let obj = Map({ name: 1, title: "imooc" });
// let obj1 = Map({ name: 1, title: "imooc" });
// console.log(is(obj, obj1));
// ===========================================================
// let obj = { name: 1, other: { age: 19 } };
// let obj1 = { name: 1, other: { age: 19 } };

// 递归对比，复杂度太高，react只 做浅层比较

// function compareObj(obj1, obj2) {
//   if (obj1 == obj2) {
//     return true;
//   }
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (let k in obj1) {
//     if (typeof obj1[k] == "object") {
//       return compareObj(obj1[k], obj2[k]);
//     } else if (obj1[k] !== obj2[k]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compareObj(obj, obj1));
// =============================================================
// isImmutable的使用
// let obj = Map({
//   name: "imooc",
//   course: Map({ name: "react+redux" })
// });
// let obj1 = obj.set({ name: "woniu" });
// console.log(obj.get("course") === obj1.get("course"));
// console.log(obj === obj1);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Map({
      num: 1,
      title: "imooc"
    });
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }
  handleClick(e) {
    console.log(this.state.get('num'));
    this.setState(this.state.set("num",5));
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
          {/* {this.state.get('num')} */}
        </h2>
        <button onClick={this.handleClick}>BtnNum</button>
        <button onClick={this.handleTitle}>BtnTitle</button>
        <Demo title={this.state.title} />
      </div>
    );
  }
}
// 方法一
class Demo extends Component {
  constructor(props) {
    super(props);
  }
  // 利用shouldComponentUpdate判断数据子组件接收的数据有没有变化，如果没变化，就不执行render
  shouldComponentUpdate(nextProps, nextState) {
    // if (compareObj(nextProps, this.props)) {
    //   return false;
    // } else {
    //   return true;
    // }
    // return true;
    return is(nextProps,this.props)
  }
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
// 方法二
// class Demo extends PureComponent {
//   constructor(props) {
//     super(props);
//   }
//   // 利用PureComponente

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
export default App;
