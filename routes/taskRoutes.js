const express = require("express");
const router = express.Router();
const { getTasks,setTask } = require("../controllers/taskController.js");
const protect  = require("../middleware/authMiddleware.js");

// router.get("/", protect, getTasks);

// router.post("/", protect, setTask);

router.route('/').get(protect,getTasks).post(protect, setTask)

module.exports = router;
