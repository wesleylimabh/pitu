export = {
  application: {
    port: process.env.PORT || 3000
  },
  database: {
    config: {
      dialect: process.env.DATABASE_DIALECT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME
    },
    sequelizeOptions: { 
      force: false
    }
  },
};
