# Swimming Gala Scoring Guide

## 📊 SCORING SYSTEM

### Point Distribution (Updated)

| Position | Individual Points | Relay Points |
|----------|------------------|--------------|
| 1st | 9 points | 18 points |
| 2nd | 6 points | 12 points |
| 3rd | 4 points | 8 points |
| 4th | 3 points | 6 points |
| 5th | 2 points | 4 points |

**Relay Events:** Points are double individual events

---

## 🏊 PARTICIPANT SCORING (HOW TO SCORE SWIMMERS)

### Current Architecture

The system supports **TWO scoring modes**:

1. **House Scoring** (Default) - Points go to houses
2. **Participant Scoring** - Points tracked per swimmer

### How to Score Participants

#### Method 1: Via Event Card (Quick Score)

1. Go to **"📋 Event Status"** tab
2. Click on an event (e.g., "E101: Girls 8 & Under...")
3. In the scoring modal:
   - Enter times for each house's swimmer
   - Format: Minutes : Seconds . Milliseconds
   - Example: `0:45.23` = 45 seconds, 23ms
4. Click **"Save Scores"**

#### Method 2: Individual Rankings Tab

1. Go to **"🏅 Individual Rankings"** tab
2. View all swimmers ranked by performance
3. Click on any swimmer to see their events

---

## 🏆 HANDLING HEATS

### For Events with 2+ Heats

**Option 1: Separate Event IDs (Recommended)**

Create separate events for each heat:
- `E101-H1` - Heat 1
- `E101-H2` - Heat 2  
- `E101-F` - Finals

**How to Add Heats:**
1. Open Settings (⚙️)
2. Go to **"🏊 Event Management"**
3. Click **"+ Add Event"**
4. Use naming convention: `Event Name - Heat 1`

**Option 2: Heat Field in Scoring**

When scoring, specify which heat:
- The system stores heat number with each score
- Finals combine times from all heats

### Heat Workflow Example

```
Event E101 (Girls 8 & Under Backstroke)
├── Heat 1: Swimmers 1-5 compete
├── Heat 2: Swimmers 6-10 compete
└── Finals: Top 3 from each heat
```

---

## 👥 VIEWING PARTICIPANT SCORES

### 1. Individual Rankings Tab

**Path:** 🏅 Individual Rankings

Shows:
- Swimmer name
- House affiliation
- Total points earned
- Events participated in
- Best times per stroke

### 2. Event Status Tab

**Path:** 📋 Event Status

Shows:
- All events with completion status
- Click event to see detailed results
- House points breakdown

### 3. Points Breakdown Tab

**Path:** 📊 Points Breakdown

Shows:
- Points per house
- Points per event category
- Running totals

### 4. Score History

**Path:** 📜 Score History

Shows:
- Chronological record
- Who scored what
- Time stamps

---

## 🎯 RANKING PARTICIPANTS

### Automatic Ranking by Time

The system **auto-ranks** swimmers by time:

1. Enter times in scoring modal
2. System sorts fastest to slowest
3. Positions assigned automatically
4. Points calculated from position

### Manual Ranking Override

If needed, you can adjust positions:
1. Open scoring modal
2. Click "Edit Ranking"
3. Drag swimmers to reorder
4. Save new positions

---

## 📱 SCORING INTERFACE WALKTHROUGH

### Step 1: Select Event
```
📋 Event Status → Click Event → Scoring Modal Opens
```

### Step 2: Enter Times
```
House: Tsavo
├── Swimmer: John Doe
├── Time: [0] min : [45] sec : [23] ms
└── DNS checkbox (if did not start)
```

### Step 3: Preview Ranking
```
Live preview shows:
🥇 1. Tsavo - 0:45.23 (9 pts)
🥈 2. Mara - 0:47.10 (6 pts)
🥉 3. Amboseli - 0:48.55 (4 pts)
```

### Step 4: Save
- Click **"Save Scores"**
- Data syncs to Firebase
- Updates all displays

---

## 🔥 HEAT MANAGEMENT EXAMPLES

### Example: Event with 2 Heats + Finals

**Setup:**
```javascript
// Original Event
E101: Girls 8 & Under Backstroke

// Create Heat Events
E101-H1: Girls 8 & Under Backstroke - Heat 1
E101-H2: Girls 8 & Under Backstroke - Heat 2
E101-F: Girls 8 & Under Backstroke - Finals
```

**Scoring Flow:**
1. Score Heat 1 → Top 3 advance
2. Score Heat 2 → Top 3 advance
3. Score Finals → Final rankings

**Points Awarded:**
- Only Finals count for house points
- Heats are for qualification

---

## 📊 DATA STRUCTURE

### Participant Score Storage

```javascript
appData.scores = {
  "E101": {
    "Tsavo": { 
      position: 1, 
      time: 45.23,
      swimmer: "John Doe",
      heat: 1
    },
    "Mara": { 
      position: 2, 
      time: 47.10,
      swimmer: "Jane Smith",
      heat: 1
    }
  }
}
```

### Individual Rankings Data

```javascript
appData.individualRankings = [
  {
    name: "John Doe",
    house: "Tsavo",
    totalPoints: 27,
    events: [
      { event: "E101", position: 1, time: 45.23, points: 9 }
    ]
  }
]
```

---

## ⚠️ IMPORTANT NOTES

### Scoring Limits
- **Max time:** 10 minutes per event
- **Positions:** 1st-5th get points
- **DNS/DNF:** Marked with checkbox (0 points)

### Data Persistence
- Scores saved to localStorage immediately
- Synced to Firebase (if online)
- Survive page refreshes

### Tie Handling
- Same time = Same position
- Points split between tied positions
- Example: Tie for 1st → Both get 9 points

---

## 🚀 QUICK TIPS

1. **Use Tabs:** Switch between tabs to verify scores
2. **History:** Check Score History for audit trail
3. **Heat Labels:** Always label heats clearly
4. **Save Often:** Scores auto-save after each entry
5. **Preview:** Use ranking preview before saving

---

## 🆘 TROUBLESHOOTING

### Can't See Individual Rankings
- Ensure participants are imported
- Check Individual Rankings tab
- Verify events have been scored

### Heat Results Not Saving
- Check event ID is unique per heat
- Verify heat field is populated
- Ensure scores are saved before next heat

### Points Not Calculating
- Check scoring system updated
- Verify positions are assigned
- Refresh page to recalculate

---

## 📞 NEED HELP?

**For technical issues:**
1. Check browser console (F12)
2. Verify Firebase connection
3. Try refreshing page

**For scoring questions:**
- Refer to this guide
- Check example events
- Test with practice data
