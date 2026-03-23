const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static('public'));

// Route
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});