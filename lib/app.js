const net = require('net');
const fs = require('fs').promises;
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const request = parseRequest(data.toString());
      
        if(request.method === 'GET' && request.path === '/') {
            socket.end(createResponse({ body: 'welcomeeeeeeeeeeee', status: '404 Not Found', contentType: 'text/plain' }));

        } else if(request.method === 'POST' && request.path === '/echo') {
            socket.end(createResponse({ body: 'sup', status: '200', contentType: 'text/plain' }));

        } else if(request.method === 'GET' && request.path === '/red') {
            socket.end(createResponse({ body: '<h1>red</h1>', status: '200', contentType: 'text/html' }));

        } else if(request.method === 'GET' && request.path === '/green') {
            socket.end(createResponse({ body: '<h1>green</h1>', status: '200', contentType: 'text/html' }));

        } else if(request.method === 'GET' && request.path === '/blue') {
            socket.end(createResponse({ body: '<h1>blue</h1>', status: '200', contentType: 'text/html' }));

        } else if(request.method === 'GET' && request.path === '/index.html') {
            fs.readFile('public/index.html', 'utf-8')
                .then((data) => socket.end(createResponse({ body: data, status: '200', contentType: 'text/html' })));
            
        } else if(request.method === 'GET' && request.path === '/readme.md') {
            fs.readFile('public/readme.md', 'utf-8')
                .then((data) => socket.end(createResponse({ body: data, status: '200', contentType: 'text/plain' })));
            
        } else if(request.method === 'GET' && request.path === '/test') {
            fs.readFile('__tests__/app.test.js', 'utf-8')
                .then((data) => socket.end(createResponse({ body: data, status: '200', contentType: 'text/html' })));

        } else { socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' })); }
        
    });
});

module.exports = app;
