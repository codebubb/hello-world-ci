const { TestServer } = require('./server');

const server = new TestServer(8001);
server.setServerListening();