import React, {Component} from 'react';
// import {addNum} from './index.redux'
export default class App extends Component {
  //   constructor (props) {
  //     super (props);
  //   }
  render () {
    const store = this.props.store;
    const num = store.getState ();
    const addNum = this.props.addNum
    const reduceNum = this.props.reduceNum
    const addNumAsync = this.props.addNumAsync
    return (
      <div>
        <div>num:{num}</div>
        <div onClick={()=>store.dispatch(addNum())}>+</div>
        <div onClick={()=>store.dispatch(addNumAsync())}>异步(延迟2s)+</div>
        <div onClick={()=>store.dispatch(reduceNum())}>-</div>
      </div>
    );
  }
}
