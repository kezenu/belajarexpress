import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';

const Users = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    validate: {
      isUUID: true,
    },
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
