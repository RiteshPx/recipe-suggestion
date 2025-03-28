const express = require("express")
const dbconnect=require("../backend/config/database");
const cors = require('cors');

const app= express()
require("dotenv").config();

// CORS Setup
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }));

// Import routes
var homeRouter = require('./router/home');  
  
// API Routes
app.use('/api/aa', homeRouter);


// Middleware
app.use(express.json());
app.set('trust proxy', 1);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})

// connnect with database;
dbconnect();

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  });


module.exports = app;  