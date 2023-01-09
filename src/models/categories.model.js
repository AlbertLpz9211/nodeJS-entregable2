const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define("categories", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  todo_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
});

module.exports = Categories;
