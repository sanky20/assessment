const express = require("express");
const router = express.Router();

// Set up routes
router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Asynchronous route with 2-second delay
router.get("/async", (req, res) => {
  setTimeout(() => {
    res.send("Delayed response after 2 seconds");
  }, 2000);
});

module.exports = router;
