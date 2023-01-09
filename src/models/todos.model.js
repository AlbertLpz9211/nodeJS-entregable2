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
  is_complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete"
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Todos;
