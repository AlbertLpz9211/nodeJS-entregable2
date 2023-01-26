const TodosServices = require("../services/todos.service");

const getAllTodos = async (req, res) => {
  try {
    result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodosById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTodos = async (req, res) => {
  try {
    const todo = req.body;
    const result = await TodosServices.createT(todo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.updateU(field, id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.deleteU(id);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTodos,
  getTodosById,
  createTodos,
  updateTodos,
  deleteTodos,
};
