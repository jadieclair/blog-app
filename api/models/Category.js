// Import the Mongoose library
const mongoose = require("mongoose");

// Define a Mongoose schema for a Category
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Name is required for a category
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Export the Mongoose model named "Category" using the CategorySchema
module.exports = mongoose.model("Category", CategorySchema);

// This code defines a Mongoose schema called CategorySchema for category data.

// The schema includes a single field: name, which represents the name of the category and is required.

// The timestamps: true option adds createdAt and updatedAt fields to automatically track when the document was created and last updated.

// The schema is exported as the Mongoose model named "Category," allowing you to create, read, update, and delete category documents in your MongoDB database using this model.
