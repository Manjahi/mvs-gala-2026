# 🎛️ GALA CONFIGURATION GUIDE

## 📋 Overview

The system is now fully configurable! All hardcoded values have been moved to external configuration files.

---

## 📁 Configuration Files

| File | Purpose |
|------|---------|
| `GALA_CONFIG.js` | Main configuration (title, colors, houses, scoring, events) |
| `PARTICIPANTS_IMPORT.js` | Participant data from PDF |
| `config.js` | Firebase credentials (kept secret) |

---

## 🎨 Step 1: Configure Event Identity

Edit `GALA_CONFIG.js`:

```javascript
const GALA_CONFIG = {
  event: {
    title: "Inter House Swimming Gala 2026",     // Change year/title
    subtitle: "Live Championship Leaderboard",    // Change subtitle
    theme: "Just Keep Swimming",                  // Change theme
    dates: "March 31 - April 1, 2026",           // Change dates
    anniversaryBadge: "40 Years of Excellence"   // Change or remove
  },
  // ...
};
```

---

## 🏠 Step 2: Configure Houses

Edit the `houses` section in `GALA_CONFIG.js`:

```javascript
houses: {
  "Tsavo": { color: "#e53e3e", id: "tsavo" },      // Red
  "Amboseli": { color: "#38a169", id: "amboseli" }, // Green
  "Aberdare": { color: "#3182ce", id: "aberdare" }, // Blue
  "Mara": { color: "#d69e2e", id: "mara" },        // Yellow
  "Samburu": { color: "#805ad5", id: "samburu" }    // Purple
}
```

**To add/remove houses:** Simply add or remove entries from this object.

---

## 🏆 Step 3: Configure Scoring Rubric

Edit the `scoring` section in `GALA_CONFIG.js`:

```javascript
scoring: {
  individual: {
    1: 7,  // 1st place points
    2: 5,  // 2nd place points
    3: 4,  // 3rd place points
    4: 3,  // 4th place points
    5: 2,  // 5th place points
    6: 1   // 6th place points
  },
  relay: {
    1: 14, // 1st place (double individual)
    2: 10,
    3: 8,
    4: 6,
    5: 4,
    6: 2
  }
}
```

**To change points:** Modify the numbers. For example, for 10-8-6-4-2-1 scoring:
```javascript
individual: { 1: 10, 2: 8, 3: 6, 4: 4, 5: 2, 6: 1 }
```

---

## 🏊 Step 4: Configure Events

Edit the `defaultEvents` array in `GALA_CONFIG.js`:

```javascript
defaultEvents: [
  { 
    id: "D1-E1",                    // Unique ID
    name: "17.5m Back (width)",     // Event name
    category: "Grade 1-2 Girls",    // Category
    day: "Mar 31",                  // Day
    group: "Grade 1-4",             // Group
    type: "individual",             // "individual" or "relay"
    completed: false                // Always false for new events
  },
  // Add more events...
]
```

**To add new events:** Copy an existing event object and modify the fields.

---

## 👥 Step 5: Import Participants

### Option A: Pre-load in Config (Recommended)

Edit the `participants` array in `GALA_CONFIG.js`:

```javascript
participants: [
  { 
    id: 1,
    name: "Naya Nduku",
    house: "Aberdare",
    grade: "Grade 1",
    events: ["D1-E1"]  // Event IDs they participate in
  },
  // Add more...
]
```

### Option B: Use PARTICIPANTS_IMPORT.js

The file `PARTICIPANTS_IMPORT.js` already contains all participants from your PDF.

**To load them:**

1. Open the admin panel in the app
2. Go to "Participants" tab
3. Click "Import from File"
4. Select the import function (we'll add this to the app)

Or manually copy from `PARTICIPANTS_IMPORT.js` into the admin panel.

---

## 🎨 Step 6: Configure Branding

### Change Colors

```javascript
branding: {
  colors: {
    primary: "#1e3a5f",    // Main blue
    secondary: "#c41e3a",  // Accent red
    accent: "#ffffff"      // White
  }
}
```

### Change Logos

Replace the image files in `assets/` folder:
- `mvs-logo-40th.png` - School logo
- `swimmer-red.png` - Swimmer graphic

Or edit the paths:
```javascript
branding: {
  schoolLogo: "assets/your-logo.png",
  swimmerGraphic: "assets/your-swimmer.png"
}
```

---

## ⚙️ Step 7: Configure Rotation

```javascript
rotation: {
  enabled: true,           // Enable/disable auto-rotation
  leaderboardCycles: 3,    // Tab cycles before videos
  tabDuration: 10,         // Seconds per tab
  videoDuration: 30        // Seconds per video
}
```

---

## 🚀 Step 8: Apply Configuration

### Method 1: Auto-Load (Recommended)

Add these script tags to `Swim.html` in the `<head>`:

```html
<script src="GALA_CONFIG.js"></script>
<script src="PARTICIPANTS_IMPORT.js"></script>
```

Then modify the app initialization to use:
```javascript
// Use config if available, otherwise use defaults
const config = window.GALA_CONFIG || defaultConfig;
```

### Method 2: Manual Import

1. Open Admin Panel
2. Go to "Settings" tab
3. Click "Import Configuration"
4. Paste the config JSON

---

## 🔄 For Next Year's Gala

Simply edit `GALA_CONFIG.js`:

1. **Update title and dates**
2. **Modify events** (add/remove/change names)
3. **Update participants** (clear and add new list)
4. **Change theme** if needed
5. **Adjust scoring** if rules change

**Nothing else needs to be changed!** The app will automatically use the new configuration.

---

## 📊 Data That Persists vs. Erasable

### Erasable (Per-Gala Data):
- ✅ Scores
- ✅ Event completion status
- ✅ History
- ✅ Videos added during event

### Persistent (Configuration):
- ✅ Houses
- ✅ Event structure
- ✅ Scoring rubric
- ✅ Branding

---

## 🎯 Quick Checklist

Before each gala:

- [ ] Update `GALA_CONFIG.js` with new dates/title
- [ ] Update events if needed
- [ ] Clear/Update participants list
- [ ] Update theme if needed
- [ ] Test configuration loads correctly
- [ ] Backup old data (Export from admin panel)

---

## 💡 Pro Tips

1. **Test First**: Always test configuration changes in a separate browser tab
2. **Backup**: Export data before each gala
3. **Version Control**: Keep different config files for different years
4. **Firebase**: Clear Firebase data before new gala to avoid conflicts

---

## 🆘 Need Help?

If configuration doesn't load:
1. Check browser console (F12) for errors
2. Verify file paths are correct
3. Ensure no syntax errors in JSON/JavaScript
4. Try hard refresh (Ctrl+F5)