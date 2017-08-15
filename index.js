var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 
app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('mensagem de chat', function(msg){
    io.emit('mensagem de chat', msg);
  });
});

http.listen(3000, function(){
	console.log('Ouvindo on *:3000');
});