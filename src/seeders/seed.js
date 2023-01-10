const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");

const users = [
  {
    username: "Alberto",
    email: "alberto.lopez_g@outlook.com",
    password: "1234",
  },
  {
    username: "Germand",
    email: "germandz_g@outlook.com",
    password: "1234",
  },
  {
    username: "Gilvizano",
    email: "gilvizano@outlook.com",
    password: "1234",
  },
];
const todos = [
  { title: "tarea 1", description: "Descripcion para 1", userId: 1 },
  { title: "tarea 2", description: "Descripcion para 2", userId: 1 },
  { title: "tarea imposible", userId: 1 },
  { title: "dormir", description: "Descripcion para dormir", userId: 1 },
];

db.sync({ force: true })
  .then(() => {
    console.log("iniciando con el sembradio");
    users.forEach((users) => {
      Users.create(users);
    });
    setTimeout(() => {
      todos.forEach((todos) => {
        Todos.create(todos);
      });
    }, 100);
  })
  .catch((error) => console.log(error));
// const categories = [];
// const todosCategories = [];
