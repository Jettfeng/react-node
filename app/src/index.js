import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import reducers from './reducer';
import './config';

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';

// 配置redux-devtools
const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension ()
  : f => f;

const store = createStore (
  reducers,
  compose (applyMiddleware (thunk), reduxDevtools)
); //开启中间件

function Boss(){
    return <h2>这里是Boss页面</h2>
}

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Route path="/boss" component={Boss} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById ('root')
);
