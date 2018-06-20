import express from 'express';

const port = 3000;
const server = express();

server.get('/', (req, res) => {

  res.send('hey');
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
