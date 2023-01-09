const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Categories = require("./categories.model");
const Todos = require("./todos.model");

const TodosCategories = db.define(
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
      references: {
        model: Todos,
        key: "id",
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
      references: {
        model: Categories,
        key: "id",
      },
    },
  },
  { timestamps: false }
);

module.exports = TodosCategories;
