import express from 'express';

import { insertJournalEntry, getJournalEntry } from './queries/queries'
import resolvers from './resolvers'
import type { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import graphqlHTTP from 'express-graphql'
import { concatFiles } from './services/fs'
import path from 'path'

const pg = require('pg');
const graphql = require('graphql');

const port = 3000;
const app = express();

const typeDefs = concatFiles(path.resolve(__dirname, '../src', 'schema'))
const schema = makeExecutableSchema({ typeDefs, resolvers })

const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";

const client = new pg.Client(conString);
client.connect();


app.get('/', (req, resp) => {
  client.query(insertJournalEntry, [1, 2, 3, 'hello'], (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    resp.send(res.rows[0])
    console.log(res.rows[0])
  }
  })
});

app.get('/q', (req, resp) => {
  client.query(getJournalEntry, (err, res) => {
  if (err) {
    resp.send(err.stack)
  } else {
    resp.send(res.rows[0])
  }
})
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));


app.listen(port);
console.log(`Serving at http://localhost:${port}`);
