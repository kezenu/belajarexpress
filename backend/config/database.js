import { Sequelize } from 'sequelize';

const db = new Sequelize('mysql://root:@localhost:3306/auth_db');

export default db;
