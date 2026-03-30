/**
 * MVS GALA CONFIGURATION FILE
 * Edit this file to customize the gala for different years/events
 */

const GALA_CONFIG = {
  // ==================== EVENT IDENTITY ====================
  event: {
    title: "Inter House Swimming Gala 2026",
    subtitle: "Live Championship Leaderboard",
    theme: "Just Keep Swimming",
    dates: "March 30 - April 1, 2026",
    anniversaryBadge: "40 Years of Excellence"
  },

  // ==================== BRANDING ====================
  branding: {
    // Logo paths (relative to root)
    schoolLogo: "assets/mvs-logo-40th.png",
    swimmerGraphic: "assets/swimmer-red.png",
    
    // Colors (CSS variables)
    colors: {
      primary: "#1e3a5f",    // MVS Blue
      secondary: "#c41e3a",  // MVS Red
      accent: "#ffffff"      // White
    },
    
    // Background style
    background: {
      type: "gradient", // "gradient", "solid", "image"
      gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%)"
    }
  },

  // ==================== HOUSES ====================
  // Define houses with their colors
  houses: {
    "Tsavo": { color: "#d69e2e", id: "tsavo" },      // Yellow/Gold
    "Amboseli": { color: "#e53e3e", id: "amboseli" }, // Red
    "Aberdare": { color: "#38a169", id: "aberdare" }, // Green
    "Mara": { color: "#3182ce", id: "mara" },        // Blue
    "Samburu": { color: "#805ad5", id: "samburu" }    // Purple
  },

  // ==================== SCORING RUBRIC ====================
  scoring: {
    individual: {
      1: 7,  // 1st place
      2: 5,  // 2nd place
      3: 4,  // 3rd place
      4: 3,  // 4th place
      5: 2,  // 5th place
      6: 1   // 6th place
    },
    relay: {
      1: 14, // 1st place (double individual)
      2: 10, // 2nd place
      3: 8,  // 3rd place
      4: 6,  // 4th place
      5: 4,  // 5th place
      6: 2   // 6th place
    }
  },

  // ==================== EVENTS ====================
  // Based on PDF: "Inter House Swimming Entry List 31 Mar - 1 Apr 2026"
  // Day 1: March 30 - Events 101-106 (Grade 1-2)
  // Day 2: March 31 - Events 201-217 (Grade 3-6)
  // Day 3: April 1 - Events 301-315 (Grade 7-9)
  defaultEvents: [
    // ==================== DAY 1: MARCH 30 - GRADE 1-2 ====================
    { id: "E101", name: "17 SC Meter Backstroke Kickboard", category: "Grade 1-2 Girls", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    { id: "E102", name: "17 SC Meter Backstroke Kickboard", category: "Grade 1-2 Boys", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    { id: "E103", name: "17 SC Meter Freestyle Kickboard", category: "Grade 1-2 Girls", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    { id: "E104", name: "17 SC Meter Freestyle Kickboard", category: "Grade 1-2 Boys", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    { id: "E105", name: "25 SC Meter Freestyle Kickboard", category: "Grade 1-2 Girls", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    { id: "E106", name: "25 SC Meter Freestyle Kickboard", category: "Grade 1-2 Boys", day: "Mar 30", group: "Grade 1-2", type: "individual", completed: false },
    
    // ==================== DAY 2: MARCH 31 - GRADE 3-6 ====================
    // Grade 3-4 events (10 & Under)
    { id: "E201", name: "25 SC Meter Freestyle", category: "Grade 3-4 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E202", name: "25 SC Meter Freestyle", category: "Grade 3-4 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    // Grade 5-6 events (10-13)
    { id: "E203", name: "25 SC Meter Freestyle", category: "Grade 5-6 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E204", name: "25 SC Meter Freestyle", category: "Grade 5-6 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E205", name: "25 SC Meter Backstroke Kickboard", category: "Grade 3-4 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E206", name: "25 SC Meter Backstroke Kickboard", category: "Grade 3-4 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E207", name: "25 SC Meter Backstroke", category: "Grade 5-6 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E208", name: "25 SC Meter Backstroke", category: "Grade 5-6 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E209", name: "25 SC Meter Breaststroke", category: "Grade 5-6 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E210", name: "25 SC Meter Breaststroke", category: "Grade 5-6 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E211", name: "25 SC Meter Butterfly", category: "Grade 5-6 Girls", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E212", name: "25 SC Meter Butterfly", category: "Grade 5-6 Boys", day: "Mar 31", group: "Grade 3-6", type: "individual", completed: false },
    { id: "E213", name: "100 SC Meter Mixed Freestyle Relay", category: "Grade 3-4 Mixed", day: "Mar 31", group: "Grade 3-6", type: "relay", completed: false },
    { id: "E214", name: "100 SC Meter Medley Relay", category: "Grade 5-6 Mixed", day: "Mar 31", group: "Grade 3-6", type: "relay", completed: false },
    { id: "E215", name: "100 SC Meter Freestyle Relay", category: "Grade 3-4 Girls", day: "Mar 31", group: "Grade 3-6", type: "relay", completed: false },
    { id: "E216", name: "100 SC Meter Freestyle Relay", category: "Grade 3-4 Boys", day: "Mar 31", group: "Grade 3-6", type: "relay", completed: false },
    { id: "E217", name: "100 SC Meter Freestyle Relay", category: "Grade 5-6 Mixed", day: "Mar 31", group: "Grade 3-6", type: "relay", completed: false },
    
    // ==================== DAY 3: APRIL 1 - GRADE 7-9 ====================
    { id: "E301", name: "100 SC Meter Individual Medley", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E302", name: "100 SC Meter Individual Medley", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E303", name: "25 SC Meter Breaststroke", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E304", name: "25 SC Meter Breaststroke", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E305", name: "25 SC Meter Backstroke", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E306", name: "25 SC Meter Backstroke", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E307", name: "25 SC Meter Butterfly", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E308", name: "25 SC Meter Butterfly", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E309", name: "100 SC Meter Mixed Medley Relay", category: "Grade 7-9 Mixed", day: "Apr 1", group: "Grade 7-9", type: "relay", completed: false },
    { id: "E310", name: "25 SC Meter Freestyle", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E311", name: "25 SC Meter Freestyle", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "individual", completed: false },
    { id: "E312", name: "100 SC Meter Freestyle Relay", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "relay", completed: false },
    { id: "E313", name: "100 SC Meter Freestyle Relay", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "relay", completed: false },
    { id: "E314", name: "100 SC Meter Medley Relay", category: "Grade 7-9 Girls", day: "Apr 1", group: "Grade 7-9", type: "relay", completed: false },
    { id: "E315", name: "100 SC Meter Medley Relay", category: "Grade 7-9 Boys", day: "Apr 1", group: "Grade 7-9", type: "relay", completed: false }
  ],

  // ==================== ROTATION SETTINGS ====================
  rotation: {
    enabled: true,
    leaderboardCycles: 3,      // How many full tab cycles before videos
    tabDuration: 10,           // Seconds per tab
    videoDuration: 30          // Seconds per video
  },

  // ==================== PARTICIPANTS (Optional Pre-load) ====================
  // You can pre-load participants here or add via admin panel
  participants: [],

  // ==================== VIDEOS (Optional Pre-load) ====================
  // You can pre-load highlight videos here
  videos: []
};

// Make it available globally
window.GALA_CONFIG = GALA_CONFIG;
