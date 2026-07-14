const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD Pipeline!', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ message: 'Hello from CI/CD — v2!', status: 'ok' });
});

module.exports = app;