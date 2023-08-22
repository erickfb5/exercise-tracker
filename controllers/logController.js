const Exercise = require("../models/Exercise.js");
const User = require("../models/User.js");

// Retrieve exercise logs for a user
const getExerciseLogs = async (req, res) => {
  const { _id } = req.params;
  const { from, to, limit } = req.query;

  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Define date filters
    const dateFilters = {};
    if (from || to) {
      dateFilters.date = {};
      if (from) dateFilters.date.$gte = new Date(from);
      if (to) dateFilters.date.$lte = new Date(to);
    }

    // Find exercises associated with the user, apply date filters, and limit results
    let query = Exercise.find({ userId: _id });
    if (dateFilters.date) query = query.find(dateFilters);
    if (limit) query = query.limit(parseInt(limit));

    const exercises = await query;

    // Response object with user, exercise count, and log
    const exerciseLog = {
      _id: user._id,
      username: user.username,
      count: exercises.length,
      log: exercises.map((exercise) => ({
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date.toDateString(),
      })),
    };

    console.log("🏋️ 🏃 exerciseLog ==> ", exerciseLog);
    res.json(exerciseLog);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve exercise log" });
  }
};

module.exports = { getExerciseLogs };