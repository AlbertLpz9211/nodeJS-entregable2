//se tienen que importar todos nuestros modelos creados
const Todos = require("./todos.model");
const Todos_categories = require("./todos_categories.model");
const Users = require("./users.model");
const Categories=require("../models/categories.model")
const initModels=()=>{
    Users;
    Todos;
    Todos_categories;
    Categories;
    //vamos a crear las relaciones
}

module.exports = initModels;