import {Options, Sequelize} from 'sequelize';
import {config} from './config/configs';

const options = config.database.config as Options

const sequelize = new Sequelize(options)

export default sequelize;