import express from 'express';

import { insertJournalEntry, getJournalEntry } from './queries/queries'
import resolvers from './resolvers'

const pg = require('pg');
const graphql = require('graphql');

const port = 3000;
const server = express();

const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";

const client = new pg.Client(conString);
client.connect();


server.get('/', (req, resp) => {
  client.query(insertJournalEntry, [1, 2, 3, 'hello'], (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    resp.send(res.rows[0])
    console.log(res.rows[0])
  }
  })
});

server.get('/q', (req, resp) => {
  client.query(getJournalEntry, (err, res) => {
  if (err) {
    resp.send(err.stack)
  } else {
    resp.send(res.rows[0])
  }
})
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
