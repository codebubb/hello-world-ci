const { createServer }  = require('http');

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify( { hello: 'World' }));
});

server.listen(8001);