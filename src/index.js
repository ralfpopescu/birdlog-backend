import express from 'express';

const port = 3000;
const server = express();

const pg = require('pg');
const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";

const client = new pg.Client(conString);
client.connect();


const insertJournalEntry = {
  name: 'insert_journal_entry',
  text: 'INSERT INTO journal_entries (month, day, year, entry) VALUES ($1, $2, $3, $4);',
  values: [1, 2, 3, 'hello']
}

const getJournalEntry = {
  name: 'get_journal_entry',
  text: 'SELECT * FROM journal_entries'
}

server.get('/', (req, resp) => {
  client.query(insertJournalEntry, [1, 2, 3, 'hello'], (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    resp.send(res.rows[0])
    console.log(res.rows[0]) // ['Brian', 'Carlson']
  }
  })
});

server.get('/q', (req, resp) => {
  client.query(getJournalEntry, (err, res) => {
  if (err) {
    resp.send(err.stack)
  } else {
    resp.send(res.rows[0]) // ['Brian', 'Carlson']
  }
})
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
