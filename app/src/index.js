import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import reducers from './reducer';
import './config';
import './index.css'

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'


// 配置redux-devtools
const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension ()
  : f => f;

const store = createStore (
  reducers,
  compose (applyMiddleware (thunk), reduxDevtools)
); //开启中间件

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path="/bossinfo" component={BossInfo} />
          <Route path="/geniusinfo" component={GeniusInfo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById ('root')
);
