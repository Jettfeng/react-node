const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
// 新建app
const app = express ();
// work with express
const server = require ('http').Server (app);
const io = require ('socket.io') (server);
// 建立连接
io.on ('connection', function (socket) {
  console.log ('user login');
  socket.on ('sendmsg', function (data) {
    console.log (data);
    io.emit('recvmsg',data)
  });
});
const userRouter = require ('./user');

app.use (cookieParser ());
app.use (bodyParser.json ());
app.use ('/user', userRouter);

server.listen (9093, function () {
  console.log ('node app start at port 9093');
});
