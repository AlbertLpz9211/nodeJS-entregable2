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
  static async updateUser(field, id) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteU({id}) {
    try {
      const result = await Users.destroy({where: {id}})
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
