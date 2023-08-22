require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const connectDB = require('./config/dbConn');
const { rootRoute, userRoutes, exerciseRoutes, logsRoutes } = require("./routes");

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// API Routes
app.use("/", rootRoute);
app.use("/api/users", userRoutes);
app.use("/api/users/:_id/exercises", exerciseRoutes);
app.use("/api/users/:_id/logs", logsRoutes);

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
      res.json({ "error": "404 Not Found" });
  } else {
      res.type('txt').send("404 Not Found");
  }
});

const PORT = process.env.PORT || 3500;

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});