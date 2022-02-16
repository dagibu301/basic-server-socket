const Server = require('./models/server');

const server = new Server();

server.execute();

/* io.on('connection', (socket) => {
  socket.on('message-to-server', (data) => {
    console.log(data);

    io.emit('message-from-server', data);
  });
}); */


