const { where } = require("sequelize");
const Todos = require("../models/todos.model");

class TodosServices {
  static async getAll() {
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createT(todo) {
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateU(field, id) {
    try {
      const result = await Todos.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteU(id) {
    try {
        const result = await Todos.destroy(id)
        return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
