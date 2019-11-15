const { createServer }  = require('http');
const chalk = require('chalk');

class TestServer {
    constructor(port = 8000) {
        this.server = createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify( { hello: 'World', version: 3}));
            console.log(chalk.green('Received Request'));
        });
        this.port = port;

    }

    setServerListening() {
        this.server.listen(this.port);
    }

    stopServerListening() {
        console.log(`Server on ${this.port} stopping...`);
        this.server.close();
    }
}

module.exports = { TestServer };

