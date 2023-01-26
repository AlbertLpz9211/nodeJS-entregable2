const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getByName(username) {
    try {
      const result = await Users.findOne({ where: { username } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async uCreate(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(field, id) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithTask(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"], //definimos que es lo que queremos responder del modelo consultado
        include: { model: Todos, as: "task" }, //es importsante relacionar por alias
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
