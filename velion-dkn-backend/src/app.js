// src/app.js
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api', apiRoutes);

// Health Check Endpoint
app.get('/', (req, res) => {
    res.send('Velion DKN Knowledge Service is Running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n--- Velion DKN Backend ---`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Mode: Development`);
    console.log(`--------------------------\n`);
});