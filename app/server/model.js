const mongoose = require('mongoose')
// 链接数据库,并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL,{ useMongoClient: true })//如果不配置{ useMongoClient: true }会有警告
