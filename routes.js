const express = require("express");
const router = express.Router();
const path = require("path");

// Controllers
const UserController = require("./controllers/userController.js");
const LogController = require("./controllers/logController.js");
const ExerciseController = require("./controllers/exerciseController.js");

// Root route
router.get("^/$|/index(.html)?", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));

// User routes
router
  .route("/api/users")
  .post(UserController.createUser)
  .get(UserController.getAllUsers);

// Exercise routes
router.post("/api/users/:_id/exercises", ExerciseController.addExercise);
// Logs routes
router.get("/api/users/:_id/logs", LogController.getExerciseLogs);

module.exports = router;
