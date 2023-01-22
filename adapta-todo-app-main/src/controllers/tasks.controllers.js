const { TasksService } = require("../services/tasks.service");

class TasksController {
  static async createTask(req, res) {
    try {
      const { title, description, userId } = req.body;
      const task = await TasksService.createTask({
        title,
        description,
        userId,
      });
      res.json(task);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error creating tasks" });
    }
  }

  static async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await TasksService.getTaskById(id);
      res.json(task);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error getting tasks" });
    }
  }

  static async updateTaskById(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      const task = await TasksService.updateTaskById(id, {
        title,
        description,
        status,
      });
      res.json(task);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error updating tasks" });
    }
  }

  static async deleteTaskById(req, res) {
    try {
      const { id } = req.params;
      await TasksService.deleteTaskById(id);
      res.send({ message: "Task deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error deleting tasks" });
    }
  }
}

module.exports = { TasksController };
