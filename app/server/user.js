const express = require('express')
const Router = express.Router()
const modle = require('./model')
const User = modle.getModel('user')
Router.get('/list',function(req,res){
  User.find({},function(err,doc){
    return res.json(doc)
  })
})
Router.get('/info',function(req,res){
    // 用户有没有cookie
  return res.json({code:1})
})

module.exports = Router