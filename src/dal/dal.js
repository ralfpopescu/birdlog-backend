const pg = require('pg');

const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";
const client = new pg.Client(conString);
client.connect();

export const executeMutation = async (query, input) => {
  const a = client.query(query, input)
  return a
}

export const executeQuery = async (query) => {
  const a = client.query(query)
  console.log(a)
  return a
}
