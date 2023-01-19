//responde a todas las peticiones de localhost:8000/users
//aqui se coloca un controlador

const UserServices = require("../services/users.service");

//definir las rutas de nuestros endPoints (EP)
//todas las consultas de usuarios
//localhost:8000/users ---> todo para usuarios
//localhost:8000/todos ---> todo para tareas

//GET ALL USERS
//GET a /users
const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//obtener un usuario sabiendo su id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserByName = async (req, res) => {
  try {
    const { username } = req.params;
    const result = await UserServices.getByName(username);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserServices.uCreate(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const field = res.body;
    const result = await UserServices.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.json(result);
    //validar que el usuario no tenga tareas, si tiene tareas, no se puede eliminar
  } catch (error) {
    res.json(400).json(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
};
