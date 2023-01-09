const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Todos_categories = db.define("todos_categories", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  todo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Todos_categories;
