module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-52-2-118-38.compute-1.amazonaws.com',
        port: '5432',
        database: 'd8ne79odo9dlad',
        username: 'ujaklzdvpmayto',
        password: '1cdfd72cee19f1b5944368f6bd8de86f232b7952b4439daecc321f6ceba48ae8',
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

