// Import the Mongoose library
const mongoose = require("mongoose");

// Define a Mongoose schema for a Post
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title is required
      unique: true, // Title must be unique
    },
    desc: {
      type: String,
      required: true, // Description is required
    },
    photo: {
      type: String,
      required: false, // Photo is optional
    },
    username: {
      type: String,
      required: true, // Username is required
    },
    categories: {
      type: Array,
      required: false, // Categories are optional and stored as an array
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Export the Mongoose model named "Post" using the PostSchema
module.exports = mongoose.model("Post", PostSchema);

// This code defines a Mongoose schema called PostSchema for post data.

// The schema includes fields for title, desc (description), photo (optional), username, and categories (optional, stored as an array).

// The timestamps: true option adds createdAt and updatedAt fields to automatically track when the document was created and last updated.

// The schema is exported as the Mongoose model named "Post," allowing you to create, read, update, and delete post documents in your MongoDB database using this model.
