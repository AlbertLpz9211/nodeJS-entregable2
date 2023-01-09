const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Todos = db.define("todos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete", //para que respete la convencion de snakecase
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user:id",
  },
});

module.exports = Todos;
