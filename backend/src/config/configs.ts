const ENV = process.env.NODE_ENV || 'dev';

const config = require(`./config_${ENV}`);

export {config};
