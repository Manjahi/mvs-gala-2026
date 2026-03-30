/**
 * PARTICIPANT DATA IMPORTER
 * Based on PDF: "Inter House Swimming Entry List 31 Mar - 1 Apr 2026"
 * 
 * EVENT DATES:
 * - Day 1: March 30, 2026 - Events 101-106 (Grade 1-2)
 * - Day 2: March 31, 2026 - Events 201-218 (Grade 3-6)
 * - Day 3: April 1, 2026 - Events 301-315 (Grade 7-9)
 * 
 * This file contains all participants organized by event.
 * You can import this via the admin panel or load it automatically.
 */

const PARTICIPANTS_DATA = {
  // ==================== DAY 1: MARCH 30 - EVENTS 101-106 (GRADE 1-2) ====================
  "E101": { // Event 101: Girls 8 & Under 17 Backstroke Kickboard
    event: "17 Backstroke Kickboard",
    category: "Girls 8 & Under",
    participants: [
      { lane: 1, name: "Naisenya Njeri", house: "Mara" },
      { lane: 2, name: "Heavenly Nyambura", house: "Samburu" },
      { lane: 3, name: "Bancy Muthoni", house: "Amboseli" },
      { lane: 4, name: "Kellyann Njeri", house: "Tsavo" },
      { lane: 5, name: "Naya Nduku", house: "Aberdare" }
    ]
  },
  "E102": { // Event 102: Boys 8 & Under 17 Backstroke Kickboard
    event: "17 Backstroke Kickboard",
    category: "Boys 8 & Under",
    participants: [
      { lane: 1, name: "Myles Karanja", house: "Mara" },
      { lane: 2, name: "Jabali Wanyoike", house: "Samburu" },
      { lane: 3, name: "Jayson Kamau", house: "Amboseli" },
      { lane: 4, name: "Lucius Kiongo", house: "Tsavo" },
      { lane: 5, name: "Alfred Njuguna", house: "Aberdare" }
    ]
  },
  "E103": { // Event 103: Girls 8 & Under 17 Freestyle Kickboard
    event: "17 Freestyle Kickboard",
    category: "Girls 8 & Under",
    participants: [
      { lane: 1, name: "Neema Thayu", house: "Mara" },
      { lane: 2, name: "Sienna Rachel", house: "Samburu" },
      { lane: 3, name: "Princess Imela", house: "Amboseli" },
      { lane: 4, name: "Angie Liana", house: "Tsavo" },
      { lane: 5, name: "Nara Wangeci", house: "Aberdare" }
    ]
  },
  "E104": { // Event 104: Boys 8 & Under 17 Freestyle Kickboard
    event: "17 Freestyle Kickboard",
    category: "Boys 8 & Under",
    participants: [
      { lane: 1, name: "Myles Karanja", house: "Mara" },
      { lane: 2, name: "Jabali Wanyoike", house: "Samburu" },
      { lane: 3, name: "Jayson Kamau", house: "Amboseli" },
      { lane: 4, name: "Albert Ungaya", house: "Tsavo" },
      { lane: 5, name: "Spear Mathu", house: "Aberdare" }
    ]
  },
  "E105": { // Event 105: Girls 8 & Under 25 Freestyle Kickboard
    event: "25 Freestyle Kickboard",
    category: "Girls 8 & Under",
    participants: [
      { lane: 1, name: "Neema Thayu", house: "Mara" },
      { lane: 2, name: "Heavenly Nyambura", house: "Samburu" },
      { lane: 3, name: "Princess Imela", house: "Amboseli" },
      { lane: 4, name: "Nuru Njeri", house: "Tsavo" },
      { lane: 5, name: "Nara Wangeci", house: "Aberdare" }
    ]
  },
  "E106": { // Event 106: Boys 8 & Under 25 Freestyle Kickboard
    event: "25 Freestyle Kickboard",
    category: "Boys 8 & Under",
    participants: [
      { lane: 1, name: "Telvin Githua", house: "Mara" },
      { lane: 2, name: "Fausto Younis", house: "Samburu" },
      { lane: 3, name: "Jayson Kamau", house: "Amboseli" },
      { lane: 4, name: "Lucius Kiongo", house: "Tsavo" },
      { lane: 5, name: "Spear Mathu", house: "Aberdare" }
    ]
  },

  // ==================== DAY 2: MARCH 31 - EVENTS 201-218 (GRADE 3-6) ====================
  "E201": { // Event 201: Girls 10 & Under 25 Freestyle
    event: "25 Freestyle",
    category: "Girls 10 & Under",
    participants: [
      { lane: 1, name: "Furaha Riri", house: "Mara" },
      { lane: 2, name: "Maria Noelle", house: "Samburu" },
      { lane: 3, name: "Chloe Wanjiku", house: "Amboseli" },
      { lane: 4, name: "Arianna Muthoni", house: "Tsavo" },
      { lane: 5, name: "Naya Nduku", house: "Aberdare" }
    ]
  },
  "E202": { // Event 202: Boys 10 & Under 25 Freestyle
    event: "25 Freestyle",
    category: "Boys 10 & Under",
    participants: [
      { lane: 1, name: "Ivan Muigai", house: "Mara" },
      { lane: 2, name: "Jabali Wanyoike", house: "Samburu" },
      { lane: 3, name: "Andrew Wambugu", house: "Amboseli" },
      { lane: 4, name: "Austin Elega", house: "Tsavo" },
      { lane: 5, name: "Ryan Mutua", house: "Aberdare" }
    ]
  },
  "E203": { // Event 203: Girls 10-13 25 Freestyle
    event: "25 Freestyle",
    category: "Girls 10-13",
    participants: [
      { lane: 1, name: "Tanisha Wangu", house: "Mara" },
      { lane: 2, name: "Mendy Njindo", house: "Samburu" },
      { lane: 3, name: "Imani Wendo", house: "Amboseli" },
      { lane: 4, name: "Talia Akoth", house: "Tsavo" },
      { lane: 5, name: "Nataniela Njambi", house: "Aberdare" }
    ]
  },
  "E204": { // Event 204: Boys 10-13 25 Freestyle
    event: "25 Freestyle",
    category: "Boys 10-13",
    participants: [
      { lane: 1, name: "Ryan Nasinga", house: "Mara" },
      { lane: 2, name: "Elyon Dancan", house: "Samburu" },
      { lane: 3, name: "Kanja Maina", house: "Amboseli" },
      { lane: 4, name: "Mylan Kagunda", house: "Tsavo" },
      { lane: 5, name: "Austin Ng'ang'a", house: "Aberdare" }
    ]
  },
  "E205": { // Event 205: Girls 10 & Under 25 Backstroke Kickboard
    event: "25 Backstroke Kickboard",
    category: "Girls 10 & Under",
    participants: [
      { lane: 1, name: "Amelia Wanjiru", house: "Mara" },
      { lane: 2, name: "Leticia Waithera", house: "Samburu" },
      { lane: 3, name: "Natalie Wambui", house: "Amboseli" },
      { lane: 4, name: "Nuru Njeri", house: "Tsavo" },
      { lane: 5, name: "Naya Nduku", house: "Aberdare" }
    ]
  },
  "E206": { // Event 206: Boys 10 & Under 25 Backstroke Kickboard
    event: "25 Backstroke Kickboard",
    category: "Boys 10 & Under",
    participants: [
      { lane: 1, name: "Thomas Wisely", house: "Mara" },
      { lane: 2, name: "Liam Maina", house: "Samburu" },
      { lane: 3, name: "David Macharia", house: "Amboseli" },
      { lane: 4, name: "Michael Kiama", house: "Tsavo" },
      { lane: 5, name: "Spear Mathu", house: "Aberdare" }
    ]
  },
  "E207": { // Event 207: Girls 10-13 25 Backstroke
    event: "25 Backstroke",
    category: "Girls 10-13",
    participants: [
      { lane: 1, name: "Aamani Mwihaki", house: "Mara" },
      { lane: 2, name: "Amara Naitore", house: "Samburu" },
      { lane: 3, name: "Layla Evelyn", house: "Amboseli" },
      { lane: 4, name: "Nadiah Wanjiru", house: "Tsavo" },
      { lane: 5, name: "Nataniela Njambi", house: "Aberdare" }
    ]
  },
  "E208": { // Event 208: Boys 10-13 25 Backstroke
    event: "25 Backstroke",
    category: "Boys 10-13",
    participants: [
      { lane: 1, name: "Liam Carlton", house: "Mara" },
      { lane: 2, name: "Elyon Dancan", house: "Samburu" },
      { lane: 3, name: "Kanja Maina", house: "Amboseli" },
      { lane: 4, name: "Noah Kuria", house: "Tsavo" },
      { lane: 5, name: "Macaire Waweru", house: "Aberdare" }
    ]
  },
  "E209": { // Event 209: Girls 10-13 25 Breaststroke
    event: "25 Breaststroke",
    category: "Girls 10-13",
    participants: [
      { lane: 1, name: "Tanisha Wangu", house: "Mara" },
      { lane: 2, name: "Jewel Tomet", house: "Samburu" },
      { lane: 3, name: "Imani Wendo", house: "Amboseli" },
      { lane: 4, name: "Ayanna Njeri", house: "Tsavo" },
      { lane: 5, name: "Nadia Natasha", house: "Aberdare" }
    ]
  },
  "E210": { // Event 210: Boys 10-13 25 Breaststroke
    event: "25 Breaststroke",
    category: "Boys 10-13",
    participants: [
      { lane: 1, name: "Ryan Nasinga", house: "Mara" },
      { lane: 2, name: "Elyon Dancan", house: "Samburu" },
      { lane: 3, name: "Nathan Njaria", house: "Amboseli" },
      { lane: 4, name: "Mylan Kagunda", house: "Tsavo" },
      { lane: 5, name: "Macaire Waweru", house: "Aberdare" }
    ]
  },
  "E211": { // Event 211: Girls 10-13 25 Butterfly
    event: "25 Butterfly",
    category: "Girls 10-13",
    participants: [
      { lane: 1, name: "Tanisha Wangu", house: "Mara" },
      { lane: 2, name: "Mendy Njindo", house: "Samburu" },
      { lane: 3, name: "Akon Jeep", house: "Amboseli" },
      { lane: 4, name: "Naomi Kazungu", house: "Tsavo" },
      { lane: 5, name: "Nataniela Njambi", house: "Aberdare" }
    ]
  },
  "E212": { // Event 212: Boys 10-13 25 Butterfly
    event: "25 Butterfly",
    category: "Boys 10-13",
    participants: [
      { lane: 1, name: "Jayden Levi Orina", house: "Mara" },
      { lane: 2, name: "Elyon Dancan", house: "Samburu" },
      { lane: 3, name: "Nathan Njaria", house: "Amboseli" },
      { lane: 4, name: "Loang Bol", house: "Tsavo" },
      { lane: 5, name: "Macaire Waweru", house: "Aberdare" }
    ]
  },
  "E213": { // Event 213: Mixed 10 & Under 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Mixed 10 & Under",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Telvin Githua", "Estelle Wawira", "Ivan Muigai", "Arianna Muthoni"] },
      { house: "Samburu", swimmers: ["Liam Maina", "Heavenly Nyambura", "Heri Mugeria", "Jolie Wanjiru"] },
      { house: "Amboseli", swimmers: ["Gilbert Kamau", "Chloe Wanjiku", "Gabriel Kamau", "Princess Imela"] },
      { house: "Tsavo", swimmers: ["Michael Kiama", "Arianna Muthoni", "Nuru Njeri", "Lionel Kimathi"] },
      { house: "Aberdare", swimmers: ["Naya Nduku", "Alfred Njuguna", "Abigael Muthoni", "Shane Mbote"] }
    ]
  },
  "E214": { // Event 214: Mixed 10-13 100 Medley Relay (teams)
    event: "100 Medley Relay",
    category: "Mixed 10-13",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Tanisha Wangu", "Almira Kereen", "Jayden Levi Orina", "Ryan Nasinga"] },
      { house: "Samburu", swimmers: ["Zivah Wangare", "Adrian Katua", "Jewel Tomet", "Elyon Dancan"] },
      { house: "Amboseli", swimmers: ["Imani Wendo", "John Mathai", "Anella Zawadi", "Nathan Njaria"] },
      { house: "Tsavo", swimmers: ["Talia Akoth", "Alexis Njeri", "Mylan Kagunda", "Noah Kuria"] },
      { house: "Aberdare", swimmers: ["Austin Ng'ang'a", "Amani Chiwe", "Macaire Waweru", "Comfort Gathoni"] }
    ]
  },
  "E215": { // Event 215: Girls 10 & Under 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Girls 10 & Under",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Estelle Wawira", "Almira Kereen", "Furaha Riri", "Mariah Mading"] },
      { house: "Samburu", swimmers: ["Heavenly Nyambura", "Maria Noelle", "Jolie Wanjiru", "Leticia Waithera"] },
      { house: "Amboseli", swimmers: ["Chloe Wanjiku", "Layla Evelyn", "Reina Wanjiru", "Imani Njeri"] },
      { house: "Tsavo", swimmers: ["Nuru Njeri", "Talia Akoth", "Victoria Neema", "Tasha Joy Wangari"] },
      { house: "Aberdare", swimmers: ["Abigael Muthoni", "Naya Nduku", "Mary Immaculate Tiara", "Sherlyn Wanjugu"] }
    ]
  },
  "E216": { // Event 216: Boys 10 & Under 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Boys 10 & Under",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Myles Karanja", "Ryan Nasinga", "Liam Carlton", "Ivan Muigai"] },
      { house: "Samburu", swimmers: ["Jayden Gichuki", "Wesley Onyango", "Liam Maina", "Heri Mugeria"] },
      { house: "Amboseli", swimmers: ["Marcus Baraka", "Jayson Kamau", "Gabriel Kamau", "Gilbert Kamau"] },
      { house: "Tsavo", swimmers: ["Lionel Kimathi", "Bryton Kipchirchir", "Michael Kiama", "Austin Elega"] },
      { house: "Aberdare", swimmers: ["Jayden Kiogora", "Alfred Njuguna", "Ryan Mutua", "Spear Mathu"] }
    ]
  },
  "E217": { // Event 217: Mixed 10-13 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Mixed 10-13",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Mariah Mading", "Ryan Nasinga", "Liam Carlton", "Almira Kereen"] },
      { house: "Samburu", swimmers: ["Zivah Wangare", "Amara Naitore", "Jewel Tomet", "Elyon Dancan"] },
      { house: "Amboseli", swimmers: ["Akon Jeep", "Nathan Njaria", "John Mathai", "Layla Evelyn"] },
      { house: "Aberdare", swimmers: ["Amani Chiwe", "Austin Ng'ang'a", "Nataniela Njambi", "Macaire Waweru"] }
    ]
  },

  // ==================== DAY 3: APRIL 1 - EVENTS 301-315 (GRADE 7-9) ====================
  "E301": { // Event 301: Girls 12 & Over 100 IM
    event: "100 IM",
    category: "Girls 12 & Over",
    participants: [
      { lane: 1, name: "Natasha Nyawira", house: "Mara" },
      { lane: 2, name: "Mendy Njindo", house: "Samburu" },
      { lane: 3, name: "Arianna Wanjiru", house: "Amboseli" },
      { lane: 4, name: "Naomi Kazungu", house: "Tsavo" },
      { lane: 5, name: "Natalie Nyamweru", house: "Aberdare" }
    ]
  },
  "E302": { // Event 302: Boys 12 & Over 100 IM
    event: "100 IM",
    category: "Boys 12 & Over",
    participants: [
      { lane: 1, name: "Ian Njoka", house: "Mara" },
      { lane: 2, name: "Ian Mwangi", house: "Samburu" },
      { lane: 3, name: "James Mutula", house: "Amboseli" },
      { lane: 4, name: "Max Mugambi", house: "Tsavo" },
      { lane: 5, name: "Baraka Kabiru", house: "Aberdare" }
    ]
  },
  "E303": { // Event 303: Girls 12 & Over 25 Breaststroke
    event: "25 Breaststroke",
    category: "Girls 12 & Over",
    participants: [
      { lane: 1, name: "Tehila Njeri", house: "Mara" },
      { lane: 2, name: "Shantel Sifa", house: "Samburu" },
      { lane: 3, name: "Arianna Wanjiru", house: "Amboseli" },
      { lane: 4, name: "Shikoh Karanjah", house: "Tsavo" },
      { lane: 5, name: "Amshya Michaella", house: "Aberdare" }
    ]
  },
  "E304": { // Event 304: Boys 12 & Over 25 Breaststroke
    event: "25 Breaststroke",
    category: "Boys 12 & Over",
    participants: [
      { lane: 1, name: "Jayden Levi Orina", house: "Mara" },
      { lane: 2, name: "Phaltang Gatkuoth", house: "Samburu" },
      { lane: 3, name: "Baraka Mbugua", house: "Amboseli" },
      { lane: 4, name: "Ryan Gathuka", house: "Tsavo" },
      { lane: 5, name: "Theo Carson", house: "Aberdare" }
    ]
  },
  "E305": { // Event 305: Girls 12 & Over 25 Backstroke
    event: "25 Backstroke",
    category: "Girls 12 & Over",
    participants: [
      { lane: 1, name: "Hadassah Musili", house: "Mara" },
      { lane: 2, name: "Nicole Njoki", house: "Samburu" },
      { lane: 3, name: "Victoria Wangechi", house: "Amboseli" },
      { lane: 4, name: "Crystal Nyambura", house: "Tsavo" },
      { lane: 5, name: "Amshya Michaella", house: "Aberdare" }
    ]
  },
  "E306": { // Event 306: Boys 12 & Over 25 Backstroke
    event: "25 Backstroke",
    category: "Boys 12 & Over",
    participants: [
      { lane: 1, name: "Jayden Levi Orina", house: "Mara" },
      { lane: 2, name: "Phaltang Gatkuoth", house: "Samburu" },
      { lane: 3, name: "Alvin Karagu", house: "Amboseli" },
      { lane: 4, name: "Ryan Gathuka", house: "Tsavo" },
      { lane: 5, name: "Theo Carson", house: "Aberdare" }
    ]
  },
  "E307": { // Event 307: Girls 12 & Over 25 Butterfly
    event: "25 Butterfly",
    category: "Girls 12 & Over",
    participants: [
      { lane: 1, name: "Natasha Nyawira", house: "Mara" },
      { lane: 2, name: "Shantel Sifa", house: "Samburu" },
      { lane: 3, name: "Victoria Wangechi", house: "Amboseli" },
      { lane: 4, name: "Naomi Kazungu", house: "Tsavo" },
      { lane: 5, name: "Anjilikaur Kagure", house: "Aberdare" }
    ]
  },
  "E308": { // Event 308: Boys 12 & Over 25 Butterfly
    event: "25 Butterfly",
    category: "Boys 12 & Over",
    participants: [
      { lane: 1, name: "Ian Njoka", house: "Mara" },
      { lane: 2, name: "Ian Mwangi", house: "Samburu" },
      { lane: 3, name: "James Mutula", house: "Amboseli" },
      { lane: 4, name: "Max Mugambi", house: "Tsavo" },
      { lane: 5, name: "Baraka Kabiru", house: "Aberdare" }
    ]
  },
  "E309": { // Event 309: Mixed 12 & Over 100 Medley Relay (teams)
    event: "100 Medley Relay",
    category: "Mixed 12 & Over",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Natasha Nyawira", "Ian Njoka", "Tehila Njeri", "Jayden Levi Orina"] },
      { house: "Samburu", swimmers: ["Adrian Katua", "Shantel Sifa", "Mendy Njindo", "Ian Mwangi"] },
      { house: "Amboseli", swimmers: ["James Mutula", "Tatiana Njeri", "Alvin Karagu", "Abigael Stephen"] },
      { house: "Tsavo", swimmers: ["Naomi Kazungu", "Ryan Gathuka", "Max Mugambi", "Lavie Mumbi"] },
      { house: "Aberdare", swimmers: ["Baraka Kabiru", "Theo Carson", "Amshya Michaella", "Anjilikaur Kagure"] }
    ]
  },
  "E310": { // Event 310: Girls 12 & Over 25 Freestyle
    event: "25 Freestyle",
    category: "Girls 12 & Over",
    participants: [
      { lane: 1, name: "Natasha Nyawira", house: "Mara" },
      { lane: 2, name: "Mendy Njindo", house: "Samburu" },
      { lane: 3, name: "Tatiana Njeri", house: "Amboseli" },
      { lane: 4, name: "Naomi Kazungu", house: "Tsavo" },
      { lane: 5, name: "Natasha Njoki", house: "Aberdare" }
    ]
  },
  "E311": { // Event 311: Boys 12 & Over 25 Freestyle
    event: "25 Freestyle",
    category: "Boys 12 & Over",
    participants: [
      { lane: 1, name: "Ian Njoka", house: "Mara" },
      { lane: 2, name: "Adrian Katua", house: "Samburu" },
      { lane: 3, name: "James Mutula", house: "Amboseli" },
      { lane: 4, name: "Max Mugambi", house: "Tsavo" },
      { lane: 5, name: "Baraka Kabiru", house: "Aberdare" }
    ]
  },
  "E312": { // Event 312: Girls 12 & Over 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Girls 12 & Over",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Hadassah Musili", "Shanaya Nyoike", "Tehila Njeri", "Natasha Nyawira"] },
      { house: "Samburu", swimmers: ["Olivia Mbichire", "Nicole Njoki", "Mendy Njindo", "Shantel Sifa"] },
      { house: "Amboseli", swimmers: ["Abigael Stephen", "Tatiana Njeri", "Arianna Wanjiru", "Victoria Wangechi"] },
      { house: "Tsavo", swimmers: ["Naomi Kazungu", "Crystal Nyambura", "Nava Muthoni", "Sabine Koki"] },
      { house: "Aberdare", swimmers: ["Amshya Michaella", "Nadia Natasha", "Natasha Njoki", "Natalie Nyamweru"] }
    ]
  },
  "E313": { // Event 313: Boys 100 Freestyle Relay (teams)
    event: "100 Freestyle Relay",
    category: "Boys 12 & Over",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Liam Carlton", "Ryan Nasinga", "Ian Njoka", "Jayden Levi Orina"] },
      { house: "Samburu", swimmers: ["Phaltang Gatkuoth", "Ian Mwangi", "Adrian Katua", "Michael Mwaura"] },
      { house: "Amboseli", swimmers: ["Alvin Karagu", "Emmanuel Baraka", "James Mutula", "Riley Njuguna"] },
      { house: "Tsavo", swimmers: ["Max Mugambi", "Noah Kuria", "Ryan Gathuka", "Kian Wanjohi"] },
      { house: "Aberdare", swimmers: ["Emmanuel Mwendwa", "Ernest Njoroge", "Baraka Kabiru", "Theo Carson"] }
    ]
  },
  "E314": { // Event 314: Girls 12 & Over 100 Medley Relay (teams)
    event: "100 Medley Relay",
    category: "Girls 12 & Over",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Hadassah Musili", "Shanaya Nyoike", "Tehila Njeri", "Natasha Nyawira"] },
      { house: "Samburu", swimmers: ["Shantel Sifa", "Nicole Njoki", "Mendy Njindo", "Valencia Kulola"] },
      { house: "Amboseli", swimmers: ["Tatiana Njeri", "Victoria Wangechi", "Arianna Wanjiru", "Abigael Stephen"] },
      { house: "Tsavo", swimmers: ["Naomi Kazungu", "Phoebe Nyambura", "Leila Nafula", "Shanice Wangari"] },
      { house: "Aberdare", swimmers: ["Natasha Njoki", "Tabby Wanjiku", "Natalie Nyamweru", "Amshya Michaella"] }
    ]
  },
  "E315": { // Event 315: Boys 100 Medley Relay (teams)
    event: "100 Medley Relay",
    category: "Boys 12 & Over",
    type: "relay",
    teams: [
      { house: "Mara", swimmers: ["Jayden Levi Orina", "Liam Carlton", "Ian Njoka", "Ryan Nasinga"] },
      { house: "Samburu", swimmers: ["Phaltang Gatkuoth", "Michael Mwaura", "Adrian Katua", "Ian Mwangi"] },
      { house: "Amboseli", swimmers: ["Riley Njuguna", "James Mutula", "Nathan Don", "Alvin Karagu"] },
      { house: "Tsavo", swimmers: ["Loang Bol", "Max Mugambi", "Ryan Gathuka", "Kian Wanjohi"] },
      { house: "Aberdare", swimmers: ["Baraka Kabiru", "Ernest Njoroge", "Theo Carson", "Emmanuel Mwendwa"] }
    ]
  }
};

// Officials data
const OFFICIALS_DATA = [
  { role: "Meet Director", name: "Newton Madrigal", phone: "0707446940" },
  { role: "Referee", name: "Violet Kimuri", phone: "0798352523" },
  { role: "Starter", name: "Francis Njenga", phone: "0720053172" },
  { role: "Chief Timekeeper", name: "Micah Oteyo", phone: "0113538861" },
  { role: "Results Officer", name: "Samson Kariuki", phone: "0732700002" },
  { role: "MC", name: "Rodgers Hyuga", phone: "0710202904" },
  { role: "Event Director", name: "Stephanie Kituri", phone: "" }
];

// House Patrons
const HOUSE_PATRONS = {
  "Mara": [
    { name: "Dennis Keya", phone: "0791638230" },
    { name: "Fridah Meme", phone: "0725445115" }
  ],
  "Amboseli": [
    { name: "Nelson Ochieng", phone: "0712185828" },
    { name: "Vyonah Kemunto", phone: "0728635044" }
  ],
  "Samburu": [
    { name: "Obed Afwamba", phone: "0708951047" },
    { name: "Agnes Ndungi", phone: "0722144421" }
  ],
  "Tsavo": [
    { name: "Joshua Ngondi", phone: "0727651295" },
    { name: "Irene Adhiambo", phone: "0790761222" }
  ],
  "Aberdare": [
    { name: "Timothy Kimale", phone: "0702334844" },
    { name: "Juliana Ndunge", phone: "0795051608" }
  ]
};

// Export for use
window.PARTICIPANTS_DATA = PARTICIPANTS_DATA;
window.OFFICIALS_DATA = OFFICIALS_DATA;
window.HOUSE_PATRONS = HOUSE_PATRONS;

// Auto-import function - call this to import all participants
// Usage: In browser console, type: importParticipantsFromFile()
window.importParticipantsFromFile = function() {
  if (typeof importParticipants === 'function') {
    importParticipants(PARTICIPANTS_DATA);
  } else {
    console.error('importParticipants function not found. Make sure Swim.html is fully loaded.');
    alert('Please wait for the page to fully load, then try again.');
  }
};

console.log('📋 Participant data loaded. To import, run: importParticipantsFromFile()');
