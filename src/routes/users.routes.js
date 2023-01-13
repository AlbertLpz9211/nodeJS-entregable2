const Users = require("../models/users.model");
const { Router } = require("express");
const router = Router();

//responde a todas las peticiones de localhost:8000/users
//aqui se coloca un controlador

//definir las rutas de nuestros endPoints (EP)
//todas las consultas de usuarios
//localhost:8000/users ---> todo para usuarios
//localhost:8000/todos ---> todo para tareas

//GET a /users
router.get("/users", async (req, res) => {
  try {
    //vamos a obtener el resultado de consultar a todos los datos de la base de datos
    const result = await Users.findAll(); //equivalencia ---> SELECT * FROM users;
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//obtener un usuario sabiendo su id
router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; //destructurar equivale a  ---> const id = req.params.id
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//obtener un usuario por username

router.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } }); //equivale a --> SELECT * FROM users WHERE username = username
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//crear un usuario
router.post("/users", async (req, res) => {
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

router.put("/users/:id", async (req, res) => {
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
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({ where: { id } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
//export default router
