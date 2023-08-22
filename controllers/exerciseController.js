const Exercise = require("../models/Exercise.js");
const User = require("../models/User.js");

// Add an exercise for a user
const addExercise = async (req, res) => {
  const { _id } = req.params;
  const { description, duration, date } = req.body;

  console.log(" request ==> ", req)

  try {
    console.log("Received request with _id:", _id); // Log the _id from the request

    const user = await User.findById(_id);

    console.log("User found:", user); // Log the user object
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