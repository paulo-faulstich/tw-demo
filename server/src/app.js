const express = require("express");
const bodyParser = require("body-parser");
const blockchainRoutes = require("./routes/blockchain");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.use("/api/blockchain", blockchainRoutes);

app.get("/", (req, res) => {
  res.send("Twism Token Backend is running!");
});

module.exports = app;