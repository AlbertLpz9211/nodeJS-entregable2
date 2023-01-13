const Todos = require ("../models/todos.model")
const { Router } = require("express");
const router = Router();

//endpoints para las tareas por hacer (todos)
router.get("/todos", async (req, res) => {
    try {
      const result = await Todos.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  
  router.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todos.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  router.post("/todos", async (req, res) => {
    try {
      const field = req.body;
      const result = await Todos.create(field);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  
  router.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const field = req.body;
      const result = await Todos.update(field, { where: { id } });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  router.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Todos.destroy({ where: { id } });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  });




module.exports=router;