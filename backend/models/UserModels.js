<<<<<<< HEAD
import Sequelize from 'sequelize';
import db from '../config/Database';

const { DataTypes } = Sequelize;
const Users = db.define(
  'users',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { freezeTableName: true }
);

export default Users;
=======
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
>>>>>>> cdd434e979e0e1361448ef83fafe5a0ac686e5df
