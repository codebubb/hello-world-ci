/* eslint-env node, mocha */
const { expect }  = require('chai');
const { TestServer } = require('../server');
const http = require('http');

describe('server setup', () => {
    it('sets the server up running', () => {
        const server = new TestServer(8001);
        expect(server.port).to.be.eql(8001);
        expect(server.server).to.be.an('object');
        server.stopServerListening();
    });

    it('sets the server up running with a default port', () => {
        const server = new TestServer();
        expect(server.port).to.be.eql(8000);
        server.stopServerListening();
    });
});

describe('server function', () => {
    let server;
    beforeEach(() => {
        server = new TestServer(8002);
        server.setServerListening();
    });
    afterEach(() => {
        server.stopServerListening();
    });

    it('responds to get requests', (done) => {
        http.get('http://localhost:8002', (res) => {
            expect(res.statusCode).to.be.eql(200);
            done();
        });
    });
})