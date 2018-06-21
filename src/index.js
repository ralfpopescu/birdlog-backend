import express from 'express';

const port = 3000;
const server = express();

const pg = require('pg');
const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";

const client = new pg.Client(conString);
client.connect();

server.get('/', (req, res) => {

  res.send('hey');
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
