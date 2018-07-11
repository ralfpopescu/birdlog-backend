const pg = require('pg');

const conString = "postgres://ralfpopescu:@localhost:5432/birdlog";
const client = new pg.Client(conString);
client.connect();

export const executeMutation = (query, input) => {
  client.query(query, input, (err, res) => {
  if (err) {
    console.log(err.stack)
    return NULL
  } else {
    return res
  }
  })
}

export const executeQuery = async (query) => {
  const a = client.query(query)
  console.log(a)
  return a
}
