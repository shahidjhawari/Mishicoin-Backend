require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/connection");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",  // If React Native is on a different IP, replace localhost with that IP
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
};

app.use(cors(corsOptions));  // Apply CORS with the defined options
app.use(bodyParser.json());  // Parse incoming JSON payloads

// API routes
app.use("/api", userRoutes); 

app.get("/", (req, res) =>{
  res.send("Welcome")
})

app.get("/home", (req, res) =>{
  res.send("Welcome Home")
})

// Set up the server port
const port = process.env.PORT || 5000;

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
