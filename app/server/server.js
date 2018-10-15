const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser') 
const userRouter = require('./user')
// 新建app
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.get('/',function(req,res){
    res.json({code:0})
})
app.listen(9093,function(){
    console.log('node app start at port 9093');
})