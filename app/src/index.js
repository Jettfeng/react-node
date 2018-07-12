import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {counter,addNum,reduceNum,addNumAsync} from './index.redux';
const store = createStore (counter,applyMiddleware(thunk));//开启中间件
function render(){
    ReactDOM.render (<App store={store} addNum={addNum} reduceNum={reduceNum} addNumAsync={addNumAsync}/>, document.getElementById ('root'));
}

render()
store.subscribe(render)