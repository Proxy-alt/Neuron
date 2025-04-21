// Root Express.js server to join all proxies on /bare-<proxyname> endpoints
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve robots.txt for SEO
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

// =================== Ultraviolet Integration ===================
const ultravioletPath = path.join(__dirname, 'proxies', 'ultraviolet');
try {
  const uvApp = require(path.join(ultravioletPath, 'index.js'));
  app.use('/bare-ultraviolet', uvApp);
} catch (e) {
  app.get('/bare-ultraviolet*', (req, res) => res.status(501).send('Ultraviolet proxy integration error.'));
}

// =================== Scramjet Integration ===================
const scramjetPath = path.join(__dirname, 'proxies', 'scramjet');
try {
  const scramjetApp = require(path.join(scramjetPath, 'server.js'));
  app.use('/bare-scramjet', scramjetApp);
} catch (e) {
  app.get('/bare-scramjet*', (req, res) => res.status(501).send('Scramjet proxy integration error.'));
}

// =================== Rammerhead Integration (via reverse proxy) ===================
const RH_PORT = 8000;
app.use('/bare-rammerhead', createProxyMiddleware({
  target: `http://localhost:${RH_PORT}`,
  changeOrigin: true,
  pathRewrite: {'^/bare-rammerhead': ''},
  ws: true,
}));

// Start main server
app.listen(PORT, () => {
  console.log(`Unified proxy server running on port ${PORT}`);
  console.log(`Ultraviolet:       http://localhost:${PORT}/bare-ultraviolet/`);
  console.log(`Scramjet:          http://localhost:${PORT}/bare-scramjet/`);
  console.log(`Rammerhead:        http://localhost:${PORT}/bare-rammerhead/`);
});

// Optional: Start Rammerhead as a child process if desired
// ... Not implemented here for safety and simplicity ...
