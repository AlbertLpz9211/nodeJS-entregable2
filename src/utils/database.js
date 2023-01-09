const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost", //el servidor donde estamos usando la DB
  port: "5432",
  password: "root",
  dialect: "postgres", // la base de datos que estamos usando
});

module.exports = db;