import Sequelize from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModels.js';

const { DataTypes } = Sequelize;
const Product = db.define(
  'product',
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { freezeTableName: true }
);

Users.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(Users, { foreignKey: 'userId' });

export default Product;
