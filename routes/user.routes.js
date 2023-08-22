const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");

router
  .route("/")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

module.exports = router;
