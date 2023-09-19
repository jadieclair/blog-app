const router = require("express").Router();
const User = require("../models/User"); // Import the User model for interacting with user data
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing and comparison

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash the user's password using the salt
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Create a new User document with username, email, and hashed password
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    // Save the new user document to the database
    const user = await newUser.save();

    // Respond with the saved user data (excluding the password)
    res.status(200).json(user);
  } catch (err) {
    // Handle errors and respond with a 500 Internal Server Error status
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // Find a user document in the database by username
    const user = await User.findOne({ username: req.body.username });
    // If the user does not exist, respond with a 400 Bad Request status
    !user && res.status(400).json("Wrong credentials!");

    // Compare the provided password with the hashed password stored in the database
    const validated = await bcrypt.compare(req.body.password, user.password);
    // If the password is incorrect, respond with a 400 Bad Request status
    !validated && res.status(400).json("Wrong credentials!");

    // If the password is correct, respond with the user data (excluding the password)
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    // Handle errors and respond with a 500 Internal Server Error status
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in other parts of the application

// The /register route allows users to register by hashing their password and saving their information to the database.

// The /login route allows users to log in by comparing their provided password with the stored hashed password.

// Both routes handle errors and respond with appropriate status codes and messages.
