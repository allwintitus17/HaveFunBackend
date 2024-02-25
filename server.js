// src/server.js

const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 8800;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
