const path = require('path')

const { DATABASE_URL } = "postgres://ralfpopescu:@localhost:5432/birdlog"

const Postgrator = require('postgrator')

const postgrator = new Postgrator({
  migrationDirectory: path.resolve(__dirname, '..', 'migrations'),
  driver: 'pg',
  // Database connection config
  host: '127.0.0.1',
  port: 5432,
  database: 'birdlog',
  username: 'ralfpopescu',
  password: ''
})

postgrator
  .migrate()
  .then(appliedMigrations => console.log(appliedMigrations))
  .catch(error => console.log(error))
