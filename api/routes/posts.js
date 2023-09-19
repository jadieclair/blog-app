const router = require("express").Router();
const User = require("../models/User"); // Import the User model for interacting with user data
const Post = require("../models/Post"); // Import the Post model for interacting with post data

// CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body); // Create a new Post document with the request body
  try {
    const savedPost = await newPost.save(); // Save the new post document to the database
    res.status(200).json(savedPost); // Respond with the saved post data
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Find a post by its ID
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body, // Update the post with the request body
          },
          { new: true } // Return the updated post
        );
        res.status(200).json(updatedPost); // Respond with the updated post data
      } catch (err) {
        res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
      }
    } else {
      res.status(401).json("You can update only your post!"); // Unauthorized if the user is not the post owner
    }
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Find a post by its ID
    if (post.username === req.body.username) {
      try {
        await Post.deleteOne({ _id: post._id }); // Delete the post
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
      }
    } else {
      res.status(401).json("You can delete only your post!"); // Unauthorized if the user is not the post owner
    }
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

// GET POST by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Find a post by its ID
    res.status(200).json(post); // Respond with the post data
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user; // Get the username from the query string
  const catName = req.query.cat; // Get the category name from the query string
  try {
    let posts;
    if (username) {
      // If a username is provided, find posts by that user
      posts = await Post.find({ username });
    } else if (catName) {
      // If a category name is provided, find posts with that category
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      // Otherwise, find all posts
      posts = await Post.find();
    }
    res.status(200).json(posts); // Respond with an array of post data
  } catch (err) {
    res.status(500).json(err); // Handle errors and respond with a 500 Internal Server Error status
  }
});

module.exports = router; // Export the router for use in other parts of the application

// The code defines routes for creating, updating, deleting, and retrieving posts, including filtering by username and category name.

// It handles errors and responds with appropriate status codes and messages.

// For some routes, it checks if the user is the owner of the post and returns an "Unauthorized" status if not.
