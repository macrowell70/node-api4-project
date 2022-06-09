const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Welcome To My Application!</h1>')
})

server.get('/api/users', (req, res) => {
    res.json({ message: "request has been received" })
});

server.post('/api/register', (req, res) => {
    res.json({ message: "request has been received" })
});

server.post('/api/login', (req, res) => {
    res.json({ message: "request has been received" })
});

module.exports = server