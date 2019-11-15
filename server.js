const { createServer }  = require('http');
const chalk = require('chalk');

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify( { hello: 'World' }));
    console.log(chalk.green('Received Request');
});

server.listen(8001);