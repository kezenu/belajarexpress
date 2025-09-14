import Sequelize from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;
const Users = db.define(
  'users',
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
  },
  { freezeTableName: true }
);

const Role = db.define(
  'role',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Role.hasMany(Users, { foreignKey: 'roleId' });
Users.belongsTo(Role, { foreignKey: 'roleId' });
export default Users;
export { Role };
