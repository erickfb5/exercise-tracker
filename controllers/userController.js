const User = require("../models/User.js");

// Create a new user
const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({ username });
    const savedUser = await newUser.save();

    const userObj = { username: savedUser.username, _id: savedUser._id };
    console.log("👶 username =>", userObj.username);
    console.log("🆔 ID =>", userObj._id);

    res.json(userObj);
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}, "username _id");
    console.log("👶👶 allUsers", allUsers);
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

module.exports = { createUser, getAllUsers };