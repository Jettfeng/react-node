import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {counter,addNum,reduceNum} from './index.redux';
const store = createStore (counter);
function render(){
    ReactDOM.render (<App store={store} addNum={addNum} reduceNum={reduceNum}/>, document.getElementById ('root'));
}

render()
store.subscribe(render)