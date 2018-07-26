import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducer';
import './config';
import './index.css';

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard'

// 配置redux-devtools
const reduxDevtools = window.devToolsExtension
  ? window.devToolsExtension ()
  : f => f;

const store = createStore (
  reducers,
  compose (applyMiddleware (thunk), reduxDevtools)
); //开启中间件

// boss genius me msg 4个页面
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
          {/* 如果没有path ，只要上面的路由没有命中，就会显示 */}
          <Route component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById ('root')
);
