// Import necessary packages and modules
const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application
const dotenv = require("dotenv"); // Load environment variables from a .env file
const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const authRoute = require("./routes/auth"); // Import authentication routes
const userRoute = require("./routes/users"); // Import user routes
const postRoute = require("./routes/posts"); // Import post routes
const categoryRoute = require("./routes/categories"); // Import category routes
const multer = require("multer"); // Multer is a popular middleware library for handling file uploads in Node.js web applications, particularly those built with frameworks like Express.js.
const path = require("path"); // Import the path module for file operations

dotenv.config(); // Load environment variables from a .env file
app.use(express.json()); // Enable JSON request and response handling
app.use("/images", express.static(path.join(__dirname, "/images"))); // Serve static files from the 'images' directory

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err)); // Connect to MongoDB using Mongoose

// Configure Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); // Set the filename for uploaded files
  },
});

const upload = multer({ storage: storage }); // Initialize Multer with the storage configuration

// Define a route for handling file uploads
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "File has been uploaded" }); // Send a response after successful file upload
});

// Define routes for different parts of the application
app.use("/api/auth", authRoute); // Authentication routes
app.use("/api/users", userRoute); // User routes
app.use("/api/posts", postRoute); // Post routes
app.use("/api/categories", categoryRoute); // Category routes

// Start the Express server on port 5000
app.listen("5000", () => {
  console.log("Backend is running on port 5000.");
});

// The code sets up an Express server, connects to a MongoDB database using Mongoose, and configures routes for various parts of the application, including authentication, user management, post management, and category management.

// It uses Multer to handle file uploads, and static files in the "images" directory are served under the "/images" route.

// Environment variables are loaded from a .env file using dotenv.config().

// The server listens on port 5000 and logs a message to indicate that it's running.
