const express = require('express');
const path = require('path');
const os = require('os');
const fs = require('fs');

const app = express();

const angularDistPath = path.join(__dirname, '..', 'client', 'dist', 'client', 'browser');

app.use(express.static(angularDistPath));

app.use((req, res) => {
  // Try index.csr.html first, then index.html
  const csrFile = path.join(angularDistPath, 'index.csr.html');
  const htmlFile = path.join(angularDistPath, 'index.html');
  
  if (fs.existsSync(csrFile)) {
    res.sendFile(csrFile);
  } else if (fs.existsSync(htmlFile)) {
    res.sendFile(htmlFile);
  } else {
    res.status(503).send(`
      <html>
        <head><title>Build in Progress</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px;">
          <h1>⏳ Build in Progress</h1>
          <p>The application is being built. Please wait a moment and refresh.</p>
          <p>If this message persists, run: <code>cd client && npm run build</code></p>
        </body>
      </html>
    `);
  }
});

const PORT = process.env.PORT || 4000;

function getNetworkIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }
  
  return ips;
}

app.listen(PORT, '0.0.0.0', () => {
  console.log('\n========================================');
  console.log('🚀 RIZA Restaurant Server Started!');
  console.log('========================================');
  console.log(`\n📍 Local access:`);
  console.log(`   http://localhost:${PORT}`);
  
  const networkIPs = getNetworkIPs();
  if (networkIPs.length > 0) {
    console.log(`\n🌐 Network access (from other devices):`);
    networkIPs.forEach(ip => {
      console.log(`   http://${ip}:${PORT}`);
    });
  }
  
  console.log('\n========================================\n');
});

