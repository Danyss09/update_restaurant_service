require('dotenv').config();
const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/', restaurantRoutes); // Ruta para restaurantes

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// WebSocket server
wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket');
  
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
  
  ws.send('Connected to WebSocket server');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
