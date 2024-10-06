require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db/connection");

const app = express();

const corsOptions = {
  origin: ["*"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

const port = process.env.PORT || 5000;

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
