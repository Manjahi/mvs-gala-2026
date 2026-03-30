# How to Import Participants

This guide explains how to import participant data into the Swimming Gala system.

## Option 1: Manual Entry via Admin Panel (Recommended for small updates)

1. Open the Swimming Gala page in your browser
2. Click the **⚙️ Settings** button (bottom right corner)
3. Go to the **"👥 Participant Management"** section
4. Use the **+ Add Participant** button to add swimmers one by one
5. Fill in: Name, House, Grade, and Event

## Option 2: Import via JavaScript Console (For bulk import)

### Step 1: Prepare Your Data

Open `PARTICIPANTS_IMPORT.js` and update the `PARTICIPANTS_DATA` object with your participant information.

The data structure should match event IDs from your configuration:
- **Day 1 (Mar 30)**: Events E101-E106 → Grade 1-2
- **Day 2 (Mar 31)**: Events E201-E218 → Grade 3-6  
- **Day 3 (Apr 1)**: Events E301-E315 → Grade 7-9

### Step 2: Load the Data

**Method A: Include the script in HTML**

Add this line to your `Swim.html` before the closing `</body>` tag:

```html
<script src="PARTICIPANTS_IMPORT.js"></script>
```

Then in the browser console, run:
```javascript
importParticipants();
```

**Method B: Direct Console Import**

1. Open the Swimming Gala page in your browser
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Paste your participant data as a JavaScript object:

```javascript
const myParticipants = {
  "E101": { // Event ID
    event: "17.5m Backstroke Kickboard",
    category: "Grade 1-2 Girls",
    participants: [
      { lane: 1, name: "Student Name", house: "Tsavo" },
      { lane: 2, name: "Student Name", house: "Amboseli" },
      // ... more participants
    ]
  },
  // ... more events
};

// Import function
function importParticipants(data) {
  Object.keys(data).forEach(eventId => {
    const eventData = data[eventId];
    const event = appData.events.find(e => e.id === eventId);
    if (event) {
      event.participants = eventData.participants;
    }
  });
  saveToStorage();
  renderAll();
  console.log("Participants imported successfully!");
}

// Run import
importParticipants(myParticipants);
```

## Option 3: Import from Excel/CSV

### Step 1: Format your Excel/CSV data

Create columns like this:
| Event ID | Event Name | Category | Lane | Participant Name | House |
|----------|------------|----------|------|------------------|-------|
| E101 | 17.5m Backstroke Kickboard | Grade 1-2 Girls | 1 | Jane Doe | Tsavo |
| E101 | 17.5m Backstroke Kickboard | Grade 1-2 Girls | 2 | John Smith | Amboseli |

### Step 2: Convert to JavaScript

Use an online CSV to JSON converter, then format it to match the `PARTICIPANTS_DATA` structure.

### Step 3: Import via Console

Follow the same steps as Option 2, Method B.

## Event ID Reference

| Event ID | Event Name | Category | Day |
|----------|------------|----------|-----|
| E101 | 17.5m Backstroke Kickboard | Grade 1-2 Girls | Mar 30 |
| E102 | 17.5m Backstroke Kickboard | Grade 1-2 Boys | Mar 30 |
| E103 | 17.5m Freestyle Kickboard | Grade 1-2 Girls | Mar 30 |
| E104 | 17.5m Freestyle Kickboard | Grade 1-2 Boys | Mar 30 |
| E105 | 25m Freestyle Kickboard | Grade 1-2 Girls | Mar 30 |
| E106 | 25m Freestyle Kickboard | Grade 1-2 Boys | Mar 30 |
| E201 | 25m Freestyle | Grade 3-4 Girls | Mar 31 |
| E202 | 25m Freestyle | Grade 3-4 Boys | Mar 31 |
| E203 | 25m Freestyle | Grade 5-6 Girls | Mar 31 |
| E204 | 25m Freestyle | Grade 5-6 Boys | Mar 31 |
| ... | ... | ... | ... |
| E301 | 100m Individual Medley | Grade 7-9 Girls | Apr 1 |
| E302 | 100m Individual Medley | Grade 7-9 Boys | Apr 1 |
| ... | ... | ... | ... |

## Troubleshooting

**Q: Changes not showing up?**
A: Clear browser cache:
```javascript
localStorage.clear();
location.reload();
```

**Q: Events not matching?**
A: Make sure your Event IDs match exactly (E101, E102, etc.)

**Q: Data not persisting?**
A: Click the Save button or ensure `saveToStorage()` is called after import.

## Need Help?

Check the existing `PARTICIPANTS_IMPORT.js` file for examples of the data structure.
