const { Users } = require("../../models");
class UsersService {
  static async createUser({ username, email, password }) {
    try {
      const user = await Users.create({ username, email, password });
      return user;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getAllUsers() {
    try {
      return Users.findAll({ include: "tasks" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getUserById(id) {
    try {
      return Users.findOne({ where: { id } });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateUserById(id, { username, email, password }) {
    try {
      const user = await Users.findOne({ where: { id } });
      if (user) {
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        return user;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteUserById(id) {
    try {
      const user = await Users.findOne({ where: { id } });
      if (user) {
        await user.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { UsersService };
