# 🔥 Firebase Setup Guide (SECURE)

## ⚠️ IMPORTANT: Your API Key Was Exposed!

GitHub detected your Firebase API key in the code. Here's how to fix it:

---

## Step 1: Revoke the Exposed Key (URGENT)

1. Go to https://console.firebase.google.com
2. Select your project: `mvs-gala-2026`
3. Click the gear icon ⚙️ → "Project settings"
4. Go to "General" tab → scroll to "Your apps"
5. Find your web app → click the 3 dots (⋮) → "Delete"
6. Create a NEW web app to get a fresh API key

---

## Step 2: Create config.js File

1. Copy `config.js.template` to `config.js`:
   ```bash
   cp config.js.template config.js
   ```

2. Edit `config.js` with your NEW Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_NEW_API_KEY",
     authDomain: "mvs-gala-2026.firebaseapp.com",
     databaseURL: "https://mvs-gala-2026-default-rtdb.firebaseio.com",
     projectId: "mvs-gala-2026",
     storageBucket: "mvs-gala-2026.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abc123"
   };
   ```

---

## Step 3: Secure Your Repository

The `.gitignore` file already includes `config.js`, so it won't be uploaded to GitHub.

**Verify:**
```bash
git status
```
You should NOT see `config.js` listed.

---

## Step 4: Deploy Updates

```bash
git add .
git commit -m "Remove exposed API key, load from config.js"
git push
```

---

## 📱 For Phone Testing

The mobile layout has been fixed:
- Header now stacks vertically on small screens
- Tab navigation is now scrollable (swipe left/right)
- Swimmer graphic hidden on mobile to save space
- All 5 tabs accessible by scrolling

---

## 🔒 Security Notes

- `config.js` is in `.gitignore` - never committed to GitHub
- If you accidentally commit config.js, rotate your API key immediately
- The app works without Firebase (local-only mode) if config.js is missing

---

## 🆘 Emergency: If Key Was Abused

If you see unexpected charges or activity:
1. Go to Google Cloud Console
2. Billing → check for unusual usage
3. APIs & Services → Credentials → delete compromised key
4. Create new key and update config.js