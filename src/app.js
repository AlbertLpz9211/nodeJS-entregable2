//importar express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");

//crear una instancia de express
const app = express();
app.use(express.json()); //middleware de express
const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticadion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a utilizar el metodo sync para sincronmizar el modelo a nuestra base de datos
//devuelve una promesa y la resolvemos con then
db.sync({ force: false }) // force: true --> inicializa por completo conforme a los modelos
  .then(() => {
    console.log("base de datos sincronizada");
  })
  .catch((error) => {
    console.log(error);
  }); //devuelve una promesa

app.get("/", (req, res) => {
  res.status(200).json({ message: "buenvenido al servidor" });
});

//definir las rutas de nuestros endPoints (EP)
//todas las consultas de usuarios
//localhost:8000/users ---> todo para usuarios
//localhost:8000/todos ---> todo para tareas

//GET a /users
app.get("/users", async (req, res) => {
  try {
    //vamos a obtener el resultado de consultar a todos los datos de la base de datos
    const result = await Users.findAll(); //equivalencia ---> SELECT * FROM users;
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener un usuario sabiendo su id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; //destructurar equivale a  ---> const id = req.params.id
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener un usuario por username

app.get("users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } }); //equivale a --> SELECT * FROM users WHERE username = username
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//crear un usuario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

//actualizar un usuario, solo se puede cambiar el password

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, { where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

//eliminar un usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({ where: { id } });
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
