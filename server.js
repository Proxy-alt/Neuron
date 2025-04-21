// Minimal Scramjet Bare Proxy Server
// Run with: bun server.js OR node server.js
// If not installed: `bun add scramjet`

const { createBareServer } = require('scramjet-proxy');
const http = require('http');

const PORT = process.env.PORT || 8080;

(async () => {
  // Create the bare proxy server
  const bare = await createBareServer('/bare/');

  const server = http.createServer((req, res) => {
    // Route all /bare/* requests to Bare, else 404
    if (req.url.startsWith('/bare/')) {
      bare.handleRequest(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found. Use /bare/ as the entry point.');
    }
  });

  server.listen(PORT, () => {
    console.log(`Scramjet bare proxy listening on http://localhost:${PORT}/bare/`);
  });
})();
