const dotenv = require('dotenv');
dotenv.config();
const {user, password, host, port, databaseName } = process.env;
const url = `postgres://${user}:${password}@${host}:${port}/${databaseName}`

module.exports.datastores = {
  default: {
    adapter: 'sails-postgresql',
    url: url,
    schemaName: 'staging',
  },
};
