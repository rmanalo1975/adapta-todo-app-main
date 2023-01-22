const express = require("express");
const { UserController } = require("../controllers/users.controllers");
const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);
module.exports = router;
