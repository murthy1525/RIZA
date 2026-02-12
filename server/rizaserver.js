const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

const angularDistPath = path.join(__dirname, '..', 'client', 'dist', 'client', 'browser');

app.use(express.static(angularDistPath));

app.use((req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.csr.html'));
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

