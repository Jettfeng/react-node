import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {addNum} from './index.redux'
export default class App extends Component {
    constructor (props) {
      super (props);
      this.state = {}
    }
  componentWillMount () {
    axios.get('/data').then((res)=>{
      console.log(res);
    })
  }
  render () {
    const store = this.props.store;
    const num = store.getState ();
    const addNum = this.props.addNum;
    const reduceNum = this.props.reduceNum;
    const addNumAsync = this.props.addNumAsync;
    return (
      <Router>
        <div>
          <div>num:{num}</div>
          <div onClick={() => store.dispatch (addNum ())}>+</div>
          <div onClick={() => store.dispatch (addNumAsync ())}>异步(延迟2s)+</div>
          <div onClick={() => store.dispatch (reduceNum ())}>-</div>
        </div>
      </Router>
    );
  }
}
