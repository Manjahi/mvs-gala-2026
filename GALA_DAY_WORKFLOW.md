# 🏊 Gala Day Workflow - Best Practices

## 🎯 Recommended Setup (2-Device Solution)

### Device 1: Admin Laptop (You)
**URL:** `https://yourname.github.io/mvs-gala-2026/Swim.html`
- ✅ Enter swimmer times
- ✅ Add/manage videos
- ✅ Full control
- ✅ Press 'P' to hide admin button when casting

### Device 2: TV/Projector (Public Display)
**URL:** `https://yourname.github.io/mvs-gala-2026/Swim.html?view=public&t=TOKEN`
- ✅ Shows EXACT same content as admin
- ✅ Videos rotate automatically
- ✅ Live score updates
- ✅ NO admin controls visible

---

## 📋 Step-by-Step Workflow

### Before Event (Setup)

1. **Set up TV/Projector**
   - Connect to WiFi
   - Open public URL with QR code
   - Test video rotation works

2. **Your Admin Laptop**
   - Open admin URL
   - Test entering a sample time
   - Verify TV updates automatically
   - Press 'P' to hide admin button

3. **Videos (Optional)**
   - Add highlight videos to sidebar
   - They'll auto-rotate during breaks

---

### During Event

#### When Race Finishes:

1. **Click "Event Status" tab** on your laptop
2. **Click the completed race**
3. **Enter times** for each house (MM:SS.MS)
4. **Click "Save Scores"**
5. ✅ TV automatically updates with new standings!

#### During Breaks:
- Videos auto-rotate on TV
- You can review/enter upcoming events

#### Key Shortcuts:
| Key | Action |
|-----|--------|
| `P` | Hide/show admin button |
| `Ctrl+Shift+M` | Emergency admin reveal |

---

## 🔧 Common Issues & Fixes

### Issue: TV not updating
**Fix:** Refresh TV page (F5). Firebase syncs within 1-2 seconds.

### Issue: Videos not showing on TV
**Fix:** Make sure TV URL is `?view=public&t=...` NOT just the base URL.

### Issue: Admin button visible on TV
**Fix:** On admin laptop, press 'P' to hide. TV public view never shows it.

### Issue: Phone shows different layout
**Fix:** Normal! Mobile has scrollable tabs. Desktop/TV shows full layout.

---

## 🎬 Video Strategy

### Recommended Video Flow:
1. **Before gala starts:** Videos rotate (highlights, promos)
2. **During races:** Leaderboard tab shows
3. **Between races:** Auto-rotates through:
   - Live Standings
   - Points Breakdown  
   - Individual Rankings
   - Back to videos

### Adding Videos (Admin):
1. Open Settings (⚙️)
2. Go to "Manage Videos"
3. Paste YouTube URL
4. Videos auto-play in rotation

---

## 📱 Public View vs Admin View

| Feature | Admin | Public |
|---------|-------|--------|
| Leaderboard | ✅ Yes | ✅ Yes |
| Videos | ✅ Yes | ✅ Yes |
| Points Breakdown | ✅ Yes | ✅ Yes |
| Individual Rankings | ✅ Yes | ✅ Yes |
| Score History | ✅ Yes | ✅ Yes |
| Event Status | ✅ Editable | ✅ Read-only |
| Enter Scores | ✅ Yes | ❌ No |
| Add Videos | ✅ Yes | ❌ No |
| Settings Panel | ✅ Yes | ❌ No |
| Admin Button | ✅ Hide with 'P' | ❌ Never shows |

**Both views look IDENTICAL except admin has editing capability!**

---

## ⚡ Emergency Procedures

### If Laptop Crashes:
1. Use backup phone/tablet with admin URL
2. Login to GitHub from any device
3. Or run from local file (Swim.html)

### If TV Fails:
1. Connect laptop directly to projector via HDMI
2. Press 'P' to hide admin button
3. Use laptop as display + admin

### If Internet Goes Down:
1. App still works locally (localStorage)
2. Scores saved on admin laptop
3. Export data when internet returns

---

## 📊 Best Practices

### DO:
- ✅ Test everything day before
- ✅ Have backup devices ready
- ✅ Export data every 30 minutes
- ✅ Keep config.js secure
- ✅ Use public view on TV only

### DON'T:
- ❌ Use admin URL on public TV
- ❌ Share config.js publicly
- ❌ Refresh TV during score entry
- ❌ Add too many videos (slows loading)

---

## 🎉 Success Checklist

- [ ] Admin laptop tested
- [ ] TV connected and tested
- [ ] Public URL loaded on TV
- [ ] Sample score entered and synced
- [ ] Videos rotating properly
- [ ] Backup plan ready
- [ ] config.js secured

**You're ready for a seamless gala! 🏆**