const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Todos_categories = db.define(
  "todos_categories",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "todo_id",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
  },
  { timestamps: false }
);

module.exports = Todos_categories;
