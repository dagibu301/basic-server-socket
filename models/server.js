const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    // Http Server
    this.server = http.createServer(this.app);

    // Socket.io Server
    this.io = socketio(this.server, {
      /* Config */
    });
  }

  midlewares() {
    // Deploy public directory
    this.app.use(express.static(path.resolve(__dirname, '../public')));

    // CORS
    this.app.use(cors());
  }

  configureSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Initialize middlewares
    this.midlewares();

    // Configure sockets
    this.configureSockets();

    // Initialize server
    this.server.listen(this.port, () => {
      console.log('listening on port ' + this.port);
    });
  }
}

module.exports = Server;
