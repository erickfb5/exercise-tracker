const Exercise = require("../models/Exercise.js");
const User = require("../models/User.js");

// Add an exercise for a user
const addExercise = async (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;

  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const exercise = new Exercise({
      userId: _id,
      description,
      duration,
      date: date ? new Date(date) : new Date(),
    });

    // Save the exercise
    await exercise.save();

    // Response object with user and exercise fields
    const exerciseObj = {
      _id: user._id,
      username: user.username,
      date: exercise.date.toDateString(),
      duration: exercise.duration,
      description: exercise.description,
    };

    console.log("🏋️ 🏃 exerciseObj ==> ", exerciseObj);
    res.json(exerciseObj);
  } catch (error) {
    res.status(500).json({ error: "Exercise creation failed" });
  }
};

module.exports = { addExercise };