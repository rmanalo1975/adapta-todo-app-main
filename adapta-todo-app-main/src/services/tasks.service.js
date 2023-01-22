const { tasks } = require("../../models");
class TasksService {
  static async createTask({ title, description, userId }) {
    try {
      const task = await tasks.create({ title, description, userId });
      return task;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getTaskById(id) {
    try {
      const task = await tasks.findOne({ where: { id } });
      return task;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateTaskById(id, { title, description, status }) {
    try {
      const task = await tasks.update(
        { title, description, status },
        { where: { id } }
      );

      return this.getTaskById(task[0]);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteTaskById(id) {
    try {
      const task = await tasks.destroy({ where: { id } });
      return task;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { TasksService };
