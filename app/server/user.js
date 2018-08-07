const express = require ('express');
const utils = require ('utility');
const Router = express.Router ();
const modle = require ('./model');
const User = modle.getModel ('user');
let Chat = modle.getModel ('chat');
const _filter = {pwd: 0, __v: 0}; //查询结果的doc里面的pwd字段不返回
Router.get ('/list', function (req, res) {
  const {type} = req.query;
  // User.remove({},function(e,d){})
  User.find ({type}, function (err, doc) {
    return res.json ({code: 0, data: doc});
  });
});
Router.get ('/getmsglist', function (req, res) {
  const user = req.cookies.userid;
  // {'$or':[{from:user,to:user}]}
  User.find ({}, function (e, userdoc) {
    let users = {};
    userdoc.forEach (v => {
      users[v._id] = {name: v.user, avatar: v.avatar};
    });
    Chat.find ({'$or':[{from:user},{to:user}]}, function (err, doc) {
      if (!err) {
        return res.json ({code: 0, msgs: doc,users:users});
      }
    });
  });
});
Router.post ('/update', function (req, res) {
  const userid = req.cookies.userid;
  if (!userid) {
    return json.dumps ({code: 1});
  }
  const body = req.body;
  User.findByIdAndUpdate (userid, body, function (err, doc) {
    const data = Object.assign (
      {},
      {
        user: doc.user,
        type: doc.type,
      },
      body
    );
    return res.json ({code: 0, data});
  });
});
Router.post ('/login', function (req, res) {
  const {user, pwd} = req.body;
  User.findOne ({user, pwd: md5Pwd (pwd)}, _filter, function (err, doc) {
    //{'pwd':0}表示返回的doc里面不显示pwd字段
    if (!doc) {
      return res.json ({code: 1, msg: '用户名不存在或者密码错误'});
    }
    res.cookie ('userid', doc._id);
    return res.json ({code: 0, data: doc});
  });
});
Router.post ('/register', function (req, res) {
  const {user, pwd, type} = req.body;
  User.findOne ({user}, function (err, doc) {
    console.log (doc);
    if (doc) {
      return res.json ({code: 1, msg: '用户名重复'});
    }
    const userModel = new User ({user, type, pwd: md5Pwd (pwd)});
    userModel.save (function (e, d) {
      if (e) {
        return res.json ({code: 0, msg: ''});
      }
      const {user, type, _id} = d;
      res.cookie ('userid', _id);
      return res.json ({code: 0, data: {user, type, _id}});
    });
  });
});
Router.get ('/info', function (req, res) {
  // 用户有没有cookie
  // 获取cookie
  const userid = req.cookies.userid;
  if (!userid) {
    return res.json ({code: 1});
  }
  User.findOne ({_id: userid}, _filter, function (err, doc) {
    if (err) {
      return res.json ({code: 1, msg: '后端出错了'});
    }
    return res.json ({code: 0, data: doc});
  });
  // return res.json({code:1})
});

function md5Pwd (pwd) {
  const salt = 'imooc_is_good_3957x8yza6!@#IUHJh~~';
  return utils.md5 (utils.md5 (pwd + salt));
}

module.exports = Router;
