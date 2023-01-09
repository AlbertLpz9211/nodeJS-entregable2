//se tienen que importar todos nuestros modelos creados
const Todos = require("./todos.model");
const Todos_categories = require("./todos-categories.model");
const Users = require("./users.model");
const Categories = require("../models/categories.model");
const initModels = () => {
  Todos_categories;
  Categories;
  //vamos a crear las relaciones
  //hasOne --> tiene a uno
  //hasMany --> tiene muchos
  //belongsTo --> pertenece a
  Todos.belongsTo(Users, { as: "author", foreignKey: "user_id" }); //una tarea pertenece a un solo usuario --> con el belongsTo, sequilize ya sabe que tiene la llave foranea
  Users.hasMany(Todos, { as: "task", foreignKey: "user_id" }); // un usuario tiene muchas tareas
};

module.exports = initModels;
