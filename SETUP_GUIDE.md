# MVS Swimming Gala 2026 - Firebase + GitHub Pages Setup Guide

## 🎯 Overview

This guide will help you set up the Swimming Gala scoring system to:

- ✅ Run on multiple devices simultaneously
- ✅ Allow public viewing without admin access
- ✅ Sync scores in real-time across all devices
- ✅ Host for free on GitHub Pages

---

## 📋 Prerequisites

1. **GitHub Account** (free) - <https://github.com/signup>
2. **Google Account** (for Firebase) - <https://firebase.google.com>
3. **Your laptop** with the Swim.html file

---

## Step 1: Create Firebase Project (Real-time Database)

### 1.1 Create Firebase Account

1. Go to <https://console.firebase.google.com>
2. Sign in with your Google account
3. Click "Create a project"
4. Name it: `mvs-gala-2026`
5. Disable Google Analytics (not needed)
6. Click "Create project"

### 1.2 Create Database

1. Click "Build" → "Realtime Database" in left sidebar
2. Click "Create Database"
3. Choose location: `us-central1` (or closest to you)
4. Start in **Test mode** (we'll secure it later)
5. Click "Enable"

### 1.3 Get Firebase Config

1. Click the gear icon ⚙️ → "Project settings"
2. Scroll down to "Your apps" section
3. Click the `</>` icon (Web)
4. Register app: `mvs-gala-2026`
5. Copy the configuration object

Your config will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "mvs-gala-2026.firebaseapp.com",
  databaseURL: "https://mvs-gala-2026-default-rtdb.firebaseio.com",
  projectId: "mvs-gala-2026",
  storageBucket: "mvs-gala-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

### 1.4 Update Swim.html with Your Config

Open `Swim.html` and find this section (around line 10):

```javascript
// Your Firebase config (replace with your own)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mvs-gala-2026.firebaseapp.com",
  databaseURL: "https://mvs-gala-2026-default-rtdb.firebaseio.com",
  projectId: "mvs-gala-2026",
  storageBucket: "mvs-gala-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

**Replace with your actual values from Firebase!**

---

## Step 2: Upload to GitHub Pages

### 2.1 Create GitHub Repository

1. Go to <https://github.com/new>
2. Repository name: `mvs-gala-2026`
3. Make it **Public**
4. Click "Create repository"

### 2.2 Upload Files

**Option A: Web Upload (Easiest)**

1. In your new repo, click "uploading an existing file"
2. Upload these files:
   - `Swim.html` (with your Firebase config)
   - `app.js`
   - `assets/` folder (with logos)
3. Click "Commit changes"

**Option B: Git Command Line**

```bash
cd your-project-folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mvs-gala-2026.git
git push -u origin main
```

### 2.3 Enable GitHub Pages

1. Go to repository → "Settings" tab
2. Left sidebar → "Pages"
3. Source: "Deploy from a branch"
4. Branch: "main" → folder: "/ (root)"
5. Click "Save"
6. Wait 2-3 minutes
7. Your URL will be: `https://YOUR_USERNAME.github.io/mvs-gala-2026/Swim.html`

---

## Step 3: Two-Device Setup for Gala Day

### Device 1: Admin Laptop (You)

```
URL: https://YOUR_USERNAME.github.io/mvs-gala-2026/Swim.html
```

- ✅ Full admin access
- ✅ Enter swimmer times
- ✅ Manage events
- ✅ Add videos

### Device 2: TV/Tablet (Public View)

```
URL: https://YOUR_USERNAME.github.io/mvs-gala-2026/Swim.html?view=public&t=PUBLIC_TOKEN
```

- ✅ View-only access
- ✅ Sees live score updates
- ✅ No admin button visible
- ✅ Cannot enter scores

### How to Generate Public Link

1. On Admin laptop: Open settings (⚙️)
2. Click "Generate New QR Code"
3. Scan QR with TV/Tablet
4. Or copy the public URL shown

---

## Step 4: Time Entry Scoring

### How Scoring Works

1. Click on an event in "Event Status" tab
2. Enter swimmer times for each house:
   - **MM**: Minutes
   - **SS**: Seconds  
   - **MS**: Milliseconds (hundredths)
3. Check "DNS/DNF" for Did Not Start/Finish
4. Preview shows auto-ranking
5. Click "Save Scores"

### Auto-Ranking

```
Fastest time → 1st place → 7 points (Individual) / 14 points (Relay)
2nd fastest → 2nd place → 5 points / 10 points
3rd fastest → 3rd place → 4 points / 8 points
4th fastest → 4th place → 3 points / 6 points
5th fastest → 5th place → 2 points / 4 points
6th fastest → 6th place → 1 point / 2 points
```

---

## Step 5: Security Rules (IMPORTANT!)

### 5.1 Update Firebase Rules

Go to Firebase Console → Realtime Database → Rules

Replace with:

```json
{
  "rules": {
    "gala": {
      "data": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

⚠️ **Note**: This allows anyone to read/write. For production:

- Add authentication if needed
- Or keep the URL secret

---

## 🎬 Video Setup

### Supported Video Sources

- ✅ YouTube (full videos & shorts)
- ✅ Direct MP4/WebM files
- ✅ Google Drive (with preview link)

### NOT Supported

- ❌ Instagram (requires login)
- ❌ Facebook (blocked)

### Video Autoplay

Videos will autoplay muted. This is a browser requirement - autoplay with sound is blocked.

---

## 🔧 Troubleshooting

### Issue: "Firebase not initialized"

**Solution**: Check your Firebase config in Swim.html. Make sure all values are correct.

### Issue: "Videos not playing"

**Solution**:

- YouTube: Make sure video is public
- Direct files: Use HTTPS URLs
- Instagram: Not supported, use YouTube instead

### Issue: "Scores not syncing"

**Solution**:

1. Check internet connection
2. Verify Firebase config
3. Check browser console for errors (F12)

### Issue: "Public view still shows admin"

**Solution**: Make sure URL has `?view=public&t=` parameter

---

## 📱 Recommended Setup for Gala Day

### Equipment

1. **Admin Laptop** (You) - Enter scores
2. **TV/Projector** - Connected to tablet/second laptop showing public view
3. **Backup Tablet** - In case of issues

### Network

- All devices need internet access
- WiFi must allow Firebase connections (port 443)

### Before Event

1. ✅ Test both admin and public views
2. ✅ Enter one test event to verify sync
3. ✅ Export backup of all data
4. ✅ Print QR code for easy access

---

## 📞 Support

If issues arise during the event:

1. Use local backup: Press Ctrl+Shift+M to reveal admin (if hidden)
2. Export data regularly from admin panel
3. Refresh page if sync stops working

---

## 🎉 You're Ready

Your setup:

- ✅ Hosted on GitHub Pages (free, reliable)
- ✅ Real-time sync via Firebase
- ✅ Time-based scoring
- ✅ Public view without admin access
- ✅ Works on any device with internet

**Test everything before the gala day!** 🏊
