const express = require('express')
const mongoose = require('mongoose')
// 链接数据库,并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL,{ useMongoClient: true })//如果不配置{ useMongoClient: true }会有警告
mongoose.connection.on('connected',function(){
    console.log('mongo connect success');
})
// 类似于mysql的表， mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// 新增数据
// User.create({
//     user:'xiaohua',
//     age:12
// },function(err,doc){
//     if(!err){
//       console.log(doc);
//     }else{
//         console.log(err);
//     }
// })
// 删除数据
User.remove({age:18},function(err,doc){
  if(!err){
      console.log(doc);
  }else{
      console.log(err); 
  }
})
// 更新数据
User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
})
// 新建app
const app = express()
app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){//查找列表
        return res.json(doc)
    })
   // User.findOne({user:'xiaoming'},function(err,doc){//只查找一跳数据，返回json
       // return res.json(doc)
    //})
//   res.json({name:'imooc',type:'React'})
})
app.listen(9093,function(){
    console.log('node app start at port 9093');
})