const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files if needed
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js on Azure!',
    timestamp: new Date().toISOString(),
    status: 'running'
  });
});

// Health check endpoint (useful for Azure)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// API example route
app.get('/api/info', (req, res) => {
  res.json({
    name: 'My Node.js App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Node.js app listening at http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  console.log(`📡 API endpoint: http://localhost:${port}/api/info`);
});