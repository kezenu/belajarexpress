import { Sequelize } from 'sequelize';

const db = new Sequelize('mysql://root:@localhost:3306/alkatra');

export default db;
