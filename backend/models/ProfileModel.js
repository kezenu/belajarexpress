import Sequelize from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';

const { DataTypes } = Sequelize;
const Profile = db.define(
  'profile',
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
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
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tanggalLahir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },
  },
  { freezeTableName: true }
);

Users.hasOne(Profile, { foreignKey: 'userUuid' });
Profile.belongsTo(Users, { foreignKey: 'userUuid' });

export default Profile;
