const router = require("express").Router();
const User = require("../models/User"); // Import the User model for interacting with user data
const Post = require("../models/Post"); // Import the Post model for interacting with post data
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

// UPDATE USER PROFILE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      // If a new password is provided, hash it with a salt
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      // Update the user profile with the request body
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } // Return the updated user profile
      );
      res.status(200).json(updatedUser); // Respond with the updated user data
    } catch (err) {
      res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
    }
  } else {
    res.status(401).json("You can update only your account!"); // Unauthorized if the user is not the account owner
  }
});

// DELETE USER PROFILE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id); // Find the user by ID
      if (user) {
        try {
          await Post.deleteMany({ username: user.username }); // Delete all posts by the user
          await User.findByIdAndDelete(req.params.id); // Delete the user profile
          res.status(200).json("User has been deleted..."); // Respond with a success message
        } catch (err) {
          res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
        }
      } else {
        res.status(404).json("User not found!"); // User not found in the database
      }
    } catch (err) {
      res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
    }
  } else {
    res.status(401).json("You can delete only your account!"); // Unauthorized if the user is not the account owner
  }
});

// GET USER PROFILE by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Find the user profile by ID
    if (user) {
      const { password, ...others } = user._doc; // Exclude the password from the response
      res.status(200).json(others); // Respond with the user profile data
    } else {
      res.status(404).json("User not found!"); // User not found in the database
    }
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

module.exports = router; // Export the router for use in other parts of the application

// The code defines routes for updating, deleting, and retrieving user profiles.
// It also includes password hashing for updates and checks to ensure that users can only update or delete their own profiles.

// For retrieving user profiles, it excludes the password field from the response for security.

// It handles errors and responds with appropriate status codes and messages.
