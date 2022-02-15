const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

/* app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
}); */

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  /* socket.emit('message', {
    msg: 'Welcome to the chat app',
    date: new Date(),
  }); */

  socket.on('message-client', (data) => {
    console.log(data);
  })
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
