const router = require("express").Router();
const Category = require("../models/Category"); // Import the Category model for interacting with category data

// POST: Create a new category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body); // Create a new Category document with the request body
  try {
    const savedCat = await newCat.save(); // Save the new category document to the database
    res.status(200).json(savedCat); // Respond with the saved category data
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

// GET: Retrieve all categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find(); // Find all category documents in the database
    res.status(200).json(cats); // Respond with an array of category data
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

module.exports = router; // Export the router for use in other parts of the application

// The / route allows creating a new category by saving a new Category document to the database.

// The / route also allows retrieving all categories by finding all Category documents in the database.

// Both routes handle errors and respond with appropriate status codes and messages.
