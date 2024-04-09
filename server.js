// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const { errorHandler } = require('./middleware/errorMiddleware.js');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// @middleware for POST request 
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/' , require('./routes/messageRoutes.js'))
app.use('/api/tasks' , require('./routes/taskRoutes.js'))
app.use('/api/users' , require('./routes/userRoutes.js'))


// @middleware for designing custom-made errorHandler
app.use(errorHandler)


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
