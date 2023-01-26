const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos-categories.model");


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
  { title: "estudiar Node", description: "Descripcion para 1", userId: 1 },
  { title: "pasear al perro", description: "Descripcion para 2", userId: 1 },
  { title: "lavar platos", userId: 1 },
  { title: "ir al chequeo mensual", description: "Descripcion para dormir", userId: 1 },
];

const categories = [
  { name: "personal" }, // 1
  { name: "educacion" }, // 2
  { name: "salud" }, // 3
  { name: "trabajo" }, // 4
  { name: "hogar" }, // 5
  { name: "cocina" }, // 6
  { name: "deporte" }, // 7
  { name: "ocio" }, // 8
  { name: "financiero" }, // 9
  { name: "entretenimiento" }, // 10
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
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
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));