// Import the Mongoose library
const mongoose = require("mongoose");

// Define a Mongoose schema for a user
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // Username is required
      unique: true, // Username must be unique
    },
    email: {
      type: String,
      required: true, // Email is required
      unique: true, // Email must be unique
    },
    password: {
      type: String,
      required: true, // Password is required
    },
    profilePic: {
      type: String,
      default: "", // Profile picture URL, default is empty
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Export the Mongoose model named "User" using the UserSchema
module.exports = mongoose.model("User", UserSchema);



// This code defines a Mongoose schema called UserSchema for user data.

// The schema includes fields for username, email, password, and profilePic.

// The timestamps: true option adds createdAt and updatedAt fields to automatically track when the document was created and last updated.

// The schema is exported as the Mongoose model named "User," allowing you to create, read, update, and delete user documents in your MongoDB database using this model.