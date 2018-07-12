import React, {Component} from 'react';
import {addNum} from './index.redux'
export default class App extends Component {
  //   constructor (props) {
  //     super (props);
  //   }
  render () {
    const store = this.props.store;
    const num = store.getState ();
    return (
      <div>
        <div>num:{num}</div>
        <div onClick={()=>store.dispatch(addNum())}>+</div>
        <div>-</div>
      </div>
    );
  }
}
