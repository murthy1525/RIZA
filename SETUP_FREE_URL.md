# Free Public URL Setup for RIZA Website

## Option 1: ngrok (Easiest - 5 minutes)

### Step 1: Install ngrok
1. Go to https://ngrok.com
2. Sign up for free account
3. Download ngrok for Windows
4. Extract the `ngrok.exe` file to a folder (e.g., `C:\ngrok\`)

### Step 2: Get your authtoken
1. After signing up, go to https://dashboard.ngrok.com/get-started/your-authtoken
2. Copy your authtoken

### Step 3: Configure ngrok
Open PowerShell and run:
```powershell
cd C:\ngrok
.\ngrok.exe config add-authtoken YOUR_AUTHTOKEN_HERE
```

### Step 4: Start your server
```powershell
cd D:\RIZA\server
node rizaserver.js
```

### Step 5: Start ngrok tunnel
Open a NEW PowerShell window:
```powershell
cd C:\ngrok
.\ngrok.exe http 4000
```

### Step 6: Get your public URL
ngrok will show you a URL like:
```
Forwarding: https://abc123.ngrok-free.app -> http://localhost:4000
```

**Share this URL with anyone!** They can access your RIZA website.

**Note:** Free ngrok URLs change each time you restart. For a permanent URL, see Option 2.

---

## Option 2: Cloudflare Tunnel (Free & Permanent)

### Step 1: Install cloudflared
1. Download from: https://github.com/cloudflare/cloudflared/releases
2. Extract `cloudflared.exe` to a folder

### Step 2: Create tunnel
```powershell
cloudflared tunnel create riza
```

### Step 3: Run tunnel
```powershell
cloudflared tunnel --url http://localhost:4000
```

This gives you a permanent free URL!

---

## Option 3: Railway Free Tier (Permanent Hosting)

1. Go to https://railway.app
2. Sign up with GitHub
3. Connect your RIZA repository
4. Deploy - they give you $5 free credit monthly (enough for small sites)

---

## Option 4: Local Network Access (Same Wi-Fi Only)

If people are on the same Wi-Fi network:

1. Start your server:
   ```powershell
   cd D:\RIZA\server
   node rizaserver.js
   ```

2. Find your IP address (shown in server console)

3. Share: `http://YOUR_IP:4000`

**Example:** `http://192.168.1.144:4000`

---

## Quick Start (Recommended: ngrok)

1. Install ngrok from https://ngrok.com
2. Run: `ngrok config add-authtoken YOUR_TOKEN`
3. Start server: `node rizaserver.js` (in D:\RIZA\server)
4. Start tunnel: `ngrok http 4000` (in new terminal)
5. Share the ngrok URL!

