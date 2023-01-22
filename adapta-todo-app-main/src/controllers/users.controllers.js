const { UsersService } = require("../services/users.service");

class UserController {
  static async createUser(req, res) {
    try {
      const { username, password, email } = req.body;
      const user = await UsersService.createUser({ username, password, email });
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }

  static async getAllUsers(_req, res) {
    try {
      const users = await UsersService.getAllUsers();
      res.json(users);
    } catch (e) {
      res.status(404).json({ message: "Users not Found" });
    }
  }

  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UsersService.getUserById(id);
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }

  static async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const { username, password, email } = req.body;
      const user = await UsersService.updateUserById(id, {
        username,
        password,
        email,
      });
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }

  static async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UsersService.deleteUserById(id);
      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not Found" });
    }
  }
}

module.exports = { UserController };
