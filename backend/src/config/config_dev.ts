export = {
  application: {
    port: 3001
  },
  database: {
    config: {
      dialect: 'mysql',
      username: 'root',
      password: 'tools',
      host: 'localhost',
      port: 3306,
      database: 'pitu'
    },
    sequelizeOptions: { 
      force: true
    }
  },
};
