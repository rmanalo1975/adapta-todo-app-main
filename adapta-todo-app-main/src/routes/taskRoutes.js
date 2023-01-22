const express = require("express");
const { TasksController } = require("../controllers/tasks.controllers");
const router = express.Router();

router.post("/", TasksController.createTask);
router.get("/:id", TasksController.getTaskById);
router.put("/:id", TasksController.updateTaskById);
router.delete("/:id", TasksController.deleteTaskById);
module.exports = router;
