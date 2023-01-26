const { Router } = require("express");
const router = Router();
const {
  getAllTodos,
  getTodosById,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todos.controller")

//importamos todas las funciones controladoras




//generamos las rutas que llaman a las funciones controladoras 


router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodosById);
router.post("/todos", createTodos);
router.put("/todos/:id", updateTodos);
router.delete("/todos/:id", deleteTodos);




module.exports=router;