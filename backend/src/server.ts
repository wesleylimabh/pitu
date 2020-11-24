import app from './app';
import database from './database'
import {config} from './config/configs';

const { port } = config.application
const { sequelizeOptions } = config.database

database.sync(sequelizeOptions)
console.log(`Datanse running at ${database.config.port}`);

app.listen(port);
console.log(`Server running at ${port}`);