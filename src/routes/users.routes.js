const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTask,
} = require("../controllers/users.controller");

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.get("/users/username/:username", getUserByName);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//obtener a un usuario con sus tareas
router.get("/users/:id/todos", getUserWithTask);

module.exports = router;
//export default router
