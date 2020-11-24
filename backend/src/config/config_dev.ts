export = {
  application: {
    port: 3000
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
