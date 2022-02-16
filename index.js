const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.on('message-to-server', (data) => {
    console.log(data);

    io.emit('message-from-server', data);
  });
});

server.listen(8080, () => {
  console.log('listening on *:8080');
});
