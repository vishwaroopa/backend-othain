const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-44-199-83-229.compute-1.amazonaws.com',
        port: '5432',
        database: 'de5tpijhfrs2fc',
        username: 'ylwrizgzuzcofh',
        password: 'b2dc9bdf96a616a5e63004f22d5b61772fa2cfd74f958c1cdf7f573dbe454fa5',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
