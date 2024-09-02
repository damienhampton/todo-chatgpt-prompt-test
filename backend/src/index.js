const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();


const app = express();

// Allow all origins
app.use(cors());

// Or, configure specific origins
app.use(cors({
    origin: 'http://localhost:3000' // Adjust according to your frontend's URL
}));

// app.use(cors({
//     origin: ['https://yourproductionfrontend.com']
// }));


// Your existing routes and middleware



// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
