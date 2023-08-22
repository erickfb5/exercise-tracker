const express = require("express");
const router = express.Router();
const ExerciseController = require("../controllers/exerciseController");

router.post("/", ExerciseController.addExercise);

module.exports = router;