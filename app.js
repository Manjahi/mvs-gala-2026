/**
 * MOUNTAIN VIEW SCHOOL SWIMMING GALA 2026
 * Main Application Logic
 */

// ==========================================
// DATA MANAGEMENT
// ==========================================

const AppData = {
    houses: {
        'Tsavo': { color: '#d69e2e', id: 'tsavo' },      // Yellow/Gold
        'Amboseli': { color: '#e53e3e', id: 'amboseli' }, // Red
        'Aberdare': { color: '#38a169', id: 'aberdare' }, // Green
        'Mara': { color: '#3182ce', id: 'mara' },        // Blue
        'Samburu': { color: '#805ad5', id: 'samburu' }    // Purple
    },
    participants: [],
    events: [
        // ==================== DAY 1: MARCH 30 - EVENTS 101-106 (GRADE 1-2) ====================
        { id: 'E101', name: 'Girls 8 & Under 17 SC Meter Backstroke Kickboard', category: 'Grade 1-2 Girls', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        { id: 'E102', name: 'Boys 8 & Under 17 SC Meter Backstroke Kickboard', category: 'Grade 1-2 Boys', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        { id: 'E103', name: 'Girls 8 & Under 17 SC Meter Freestyle Kickboard', category: 'Grade 1-2 Girls', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        { id: 'E104', name: 'Boys 8 & Under 17 SC Meter Freestyle Kickboard', category: 'Grade 1-2 Boys', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        { id: 'E105', name: 'Girls 8 & Under 25 SC Meter Freestyle Kickboard', category: 'Grade 1-2 Girls', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        { id: 'E106', name: 'Boys 8 & Under 25 SC Meter Freestyle Kickboard', category: 'Grade 1-2 Boys', day: 'Mar 30', group: 'Grade 1-2', isRelay: false, completed: false, scores: {} },
        
        // ==================== DAY 2: MARCH 31 - EVENTS 201-217 (GRADE 3-6) ====================
        { id: 'E201', name: 'Girls 10 & Under 25 SC Meter Freestyle', category: 'Grade 3-4 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E202', name: 'Boys 10 & Under 25 SC Meter Freestyle', category: 'Grade 3-4 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E203', name: 'Girls 10-13 25 SC Meter Freestyle', category: 'Grade 5-6 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E204', name: 'Boys 10-13 25 SC Meter Freestyle', category: 'Grade 5-6 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E205', name: 'Girls 10 & Under 25 SC Meter Backstroke Kickboard', category: 'Grade 3-4 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E206', name: 'Boys 10 & Under 25 SC Meter Backstroke Kickboard', category: 'Grade 3-4 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E207', name: 'Girls 10-13 25 SC Meter Backstroke', category: 'Grade 5-6 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E208', name: 'Boys 10-13 25 SC Meter Backstroke', category: 'Grade 5-6 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E209', name: 'Girls 10-13 25 SC Meter Breaststroke', category: 'Grade 5-6 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E210', name: 'Boys 10-13 25 SC Meter Breaststroke', category: 'Grade 5-6 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E211', name: 'Girls 10-13 25 SC Meter Butterfly', category: 'Grade 5-6 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E212', name: 'Boys 10-13 25 SC Meter Butterfly', category: 'Grade 5-6 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: false, completed: false, scores: {} },
        { id: 'E213', name: 'Mixed 10 & Under 100 SC Meter Freestyle Relay', category: 'Grade 3-4 Mixed', day: 'Mar 31', group: 'Grade 3-6', isRelay: true, completed: false, scores: {} },
        { id: 'E214', name: 'Mixed 10-13 100 SC Meter Medley Relay', category: 'Grade 5-6 Mixed', day: 'Mar 31', group: 'Grade 3-6', isRelay: true, completed: false, scores: {} },
        { id: 'E215', name: 'Girls 10 & Under 100 SC Meter Freestyle Relay', category: 'Grade 3-4 Girls', day: 'Mar 31', group: 'Grade 3-6', isRelay: true, completed: false, scores: {} },
        { id: 'E216', name: 'Boys 10 & Under 100 SC Meter Freestyle Relay', category: 'Grade 3-4 Boys', day: 'Mar 31', group: 'Grade 3-6', isRelay: true, completed: false, scores: {} },
        { id: 'E217', name: 'Mixed 10-13 100 SC Meter Freestyle Relay', category: 'Grade 5-6 Mixed', day: 'Mar 31', group: 'Grade 3-6', isRelay: true, completed: false, scores: {} },
        
        // ==================== DAY 3: APRIL 1 - EVENTS 301-315 (GRADE 7-9) ====================
        { id: 'E301', name: 'Girls 12 & Over 100 SC Meter IM', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E302', name: 'Boys 12 & Over 100 SC Meter IM', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E303', name: 'Girls 12 & Over 25 SC Meter Breaststroke', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E304', name: 'Boys 12 & Over 25 SC Meter Breaststroke', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E305', name: 'Girls 12 & Over 25 SC Meter Backstroke', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E306', name: 'Boys 12 & Over 25 SC Meter Backstroke', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E307', name: 'Girls 12 & Over 25 SC Meter Butterfly', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E308', name: 'Boys 12 & Over 25 SC Meter Butterfly', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E309', name: 'Mixed 12 & Over 100 SC Meter Medley Relay', category: 'Grade 7-9 Mixed', day: 'Apr 1', group: 'Grade 7-9', isRelay: true, completed: false, scores: {} },
        { id: 'E310', name: 'Girls 12 & Over 25 SC Meter Freestyle', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E311', name: 'Boys 12 & Over 25 SC Meter Freestyle', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: false, completed: false, scores: {} },
        { id: 'E312', name: 'Girls 12 & Over 100 SC Meter Freestyle Relay', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: true, completed: false, scores: {} },
        { id: 'E313', name: 'Boys 100 SC Meter Freestyle Relay', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: true, completed: false, scores: {} },
        { id: 'E314', name: 'Girls 12 & Over 100 SC Meter Medley Relay', category: 'Grade 7-9 Girls', day: 'Apr 1', group: 'Grade 7-9', isRelay: true, completed: false, scores: {} },
        { id: 'E315', name: 'Boys 100 SC Meter Medley Relay', category: 'Grade 7-9 Boys', day: 'Apr 1', group: 'Grade 7-9', isRelay: true, completed: false, scores: {} }
    ],
    videos: [],
    history: [],
    settings: {
        rotationInterval: 10,
        autoRotate: true,
        adminVisible: true
    }
};

// Scoring Maps
// Individual: 1st=7, 2nd=5, 3rd=4, 4th=3, 5th=2, 6th=1
// Relay: 1st=14, 2nd=10, 3rd=8, 4th=6, 5th=4, 6th=2 (double individual)
const Scoring = {
    individual: { 1: 7, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 },
    relay: { 1: 14, 2: 10, 3: 8, 4: 6, 5: 4, 6: 2 }
};

// State
let currentTab = 0;
let rotationTimer = null;
let progressTimer = null;
let currentScoringEvent = null;

// ==========================================
// STORAGE MANAGEMENT
// ==========================================

function loadFromStorage() {
    const saved = localStorage.getItem('mvsGala2026');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(AppData, parsed);
        // Ensure events exist (backward compatibility)
        if (!AppData.events || AppData.events.length === 0) {
            resetEvents();
        }
    }
}

function saveToStorage() {
    localStorage.setItem('mvsGala2026', JSON.stringify(AppData));
}

function resetEvents() {
    // Reset to default events if needed
    location.reload();
}

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    loadFromStorage();
    setupEventListeners();
    renderAll();
    startRotation();
}

function setupEventListeners() {
    // Presentation Mode Toggle
    document.addEventListener('keydown', (e) => {
        if (e.key === 'p' || e.key === 'P') {
            toggleAdminVisibility();
        }
    });
}

function toggleAdminVisibility() {
    const btn = document.getElementById('adminBtn');
    if (btn) {
        btn.style.opacity = btn.style.opacity === '0' ? '1' : '0';
        btn.style.pointerEvents = btn.style.opacity === '0' ? 'none' : 'auto';
        AppData.settings.adminVisible = btn.style.opacity !== '0';
    }
}

// ==========================================
// RENDERING ENGINE
// ==========================================

function renderAll() {
    renderStandings();
    renderBreakdown();
    renderEvents();
    renderHistory();
    renderVideos();
    renderHousesList();
    renderParticipantsList();
    renderParticipantHouseSelect();
    renderAdminEventsList();
    updateCounts();
}

// ==========================================
// TAB MANAGEMENT
// ==========================================

function switchTab(index) {
    currentTab = index;
    
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    document.querySelectorAll('.tab-content').forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
    
    if (AppData.settings.autoRotate) {
        clearInterval(rotationTimer);
        clearInterval(progressTimer);
        startRotation();
    }
}

function startRotation() {
    if (!AppData.settings.autoRotate) return;
    
    const interval = AppData.settings.rotationInterval * 1000;
    let progress = 0;
    const increment = 100 / (AppData.settings.rotationInterval * 10);
    
    document.querySelectorAll('.timer-bar').forEach(bar => bar.style.width = '0%');
    
    progressTimer = setInterval(() => {
        progress += increment;
        const activeBtn = document.querySelector('.tab-btn.active .timer-bar');
        if (activeBtn) activeBtn.style.width = progress + '%';
        if (progress >= 100) progress = 0;
    }, 100);
    
    rotationTimer = setInterval(() => {
        const nextTab = (currentTab + 1) % 4;
        switchTab(nextTab);
    }, interval);
}

// ==========================================
// SETTINGS PANEL
// ==========================================

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    const overlay = document.querySelector('.overlay');
    panel.classList.toggle('open');
    overlay.classList.toggle('show');
    
    if (panel.classList.contains('open')) {
        renderAll();
    }
}

function switchAdminTab(tab) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(t => t.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`admin-tab-${tab}`).classList.add('active');
}

// ==========================================
// HOUSE MANAGEMENT
// ==========================================

function renderHousesList() {
    const container = document.getElementById('housesList');
    if (!container) return;
    
    container.innerHTML = Object.entries(AppData.houses).map(([name, data]) => `
        <div class="house-editor">
            <input type="text" value="${name}" onchange="updateHouseName('${name}', this.value)" placeholder="House Name">
            <div class="color-picker-wrapper" style="background: ${data.color};">
                <input type="color" value="${data.color}" onchange="updateHouseColor('${name}', this.value)">
            </div>
            <button class="btn btn-danger" onclick="removeHouse('${name}')" style="padding: 8px;">🗑️</button>
        </div>
    `).join('');
}

function addHouse() {
    const name = prompt('Enter new house name:');
    if (name && !AppData.houses[name]) {
        const colors = ['#e53e3e', '#38a169', '#3182ce', '#d69e2e', '#805ad5', '#dd6b20', '#38b2ac', '#667eea'];
        const randomColor = colors[Object.keys(AppData.houses).length % colors.length];
        AppData.houses[name] = { color: randomColor, id: name.toLowerCase().replace(/\s+/g, '-') };
        saveToStorage();
        renderAll();
    }
}

function updateHouseName(oldName, newName) {
    if (oldName === newName) return;
    if (AppData.houses[newName]) {
        alert('House name already exists!');
        return;
    }
    AppData.houses[newName] = AppData.houses[oldName];
    delete AppData.houses[oldName];
    
    AppData.participants.forEach(p => {
        if (p.house === oldName) p.house = newName;
    });
    
    AppData.events.forEach(e => {
        if (e.scores[oldName]) {
            e.scores[newName] = e.scores[oldName];
            delete e.scores[oldName];
        }
    });
    
    saveToStorage();
    renderAll();
}

function updateHouseColor(name, color) {
    AppData.houses[name].color = color;
    saveToStorage();
    renderAll();
}

function removeHouse(name) {
    if (Object.keys(AppData.houses).length <= 2) {
        alert('You must have at least 2 houses!');
        return;
    }
    if (confirm(`Remove ${name} house? All participants will be unassigned.`)) {
        delete AppData.houses[name];
        AppData.participants.forEach(p => {
            if (p.house === name) p.house = 'Unassigned';
        });
        saveToStorage();
        renderAll();
    }
}

// ==========================================
// PARTICIPANT MANAGEMENT
// ==========================================

function renderParticipantHouseSelect() {
    const select = document.getElementById('participantHouse');
    if (!select) return;
    select.innerHTML = Object.keys(AppData.houses).map(h => `<option value="${h}">${h}</option>`).join('');
}

function addParticipant() {
    const name = document.getElementById('participantName').value.trim();
    const grade = document.getElementById('participantGrade').value.trim();
    const house = document.getElementById('participantHouse').value;
    
    if (!name) {
        alert('Please enter a participant name');
        return;
    }
    
    AppData.participants.push({
        id: Date.now(),
        name,
        grade,
        house,
        added: new Date().toLocaleString()
    });
    
    document.getElementById('participantName').value = '';
    document.getElementById('participantGrade').value = '';
    saveToStorage();
    renderParticipantsList();
    updateCounts();
}

function removeParticipant(id) {
    AppData.participants = AppData.participants.filter(p => p.id !== id);
    saveToStorage();
    renderParticipantsList();
    updateCounts();
}

function renderParticipantsList() {
    const container = document.getElementById('participantsList');
    if (!container) return;
    
    if (AppData.participants.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #a0aec0; padding: 20px;">No participants added yet</p>';
        return;
    }
    
    container.innerHTML = AppData.participants.map(p => `
        <div class="participant-item">
            <div class="participant-info">
                <span class="participant-name">${p.name}</span>
                <span class="participant-house" style="color: ${AppData.houses[p.house]?.color || '#999'};">
                    ${p.house} ${p.grade ? `• ${p.grade}` : ''}
                </span>
            </div>
            <button class="btn btn-danger" onclick="removeParticipant(${p.id})" style="padding: 5px 10px; font-size: 0.8rem;">Remove</button>
        </div>
    `).join('');
}

// ==========================================
// EVENT MANAGEMENT
// ==========================================

function addEvent() {
    const name = document.getElementById('eventName').value.trim();
    const category = document.getElementById('eventCategory').value;
    const day = document.getElementById('eventDay').value;
    const isRelay = document.getElementById('eventIsRelay').checked;
    
    if (!name) {
        alert('Please enter an event name');
        return;
    }
    
    const id = `E-${Date.now().toString().slice(-4)}`;
    AppData.events.push({
        id,
        name,
        category,
        day,
        group: category.includes('1-4') ? 'Grade 1-4' : category.includes('5-6') ? 'Grade 5-6' : 'Grade 7-9',
        isRelay,
        completed: false,
        scores: {}
    });
    
    document.getElementById('eventName').value = '';
    document.getElementById('eventIsRelay').checked = false;
    saveToStorage();
    renderEvents();
    renderAdminEventsList();
    updateCounts();
}

function removeEvent(id) {
    if (confirm('Delete this event?')) {
        AppData.events = AppData.events.filter(e => e.id !== id);
        saveToStorage();
        renderEvents();
        renderAdminEventsList();
        updateCounts();
    }
}

function renderAdminEventsList() {
    const container = document.getElementById('eventsList');
    if (!container) return;
    
    container.innerHTML = AppData.events.map(e => `
        <div class="event-editor">
            <div class="event-editor-header">
                <div>
                    <span class="event-editor-title">${e.id}: ${e.name}</span>
                    ${e.isRelay ? '<span class="relay-badge">RELAY</span>' : ''}
                </div>
                <button class="btn btn-danger" onclick="removeEvent('${e.id}')" style="padding: 5px 10px;">🗑️</button>
            </div>
            <div style="font-size: 0.85rem; color: #718096;">
                ${e.category} • ${e.day} • ${e.completed ? '✅ Completed' : '⏳ Pending'}
            </div>
        </div>
    `).join('');
}

// ==========================================
// SCORING SYSTEM
// ==========================================

function openScoringModal(eventId) {
    const event = AppData.events.find(e => e.id === eventId);
    if (!event) return;
    
    currentScoringEvent = event;
    document.getElementById('scoringEventName').textContent = `${event.id}: ${event.name} (${event.category})`;
    document.getElementById('scoringTypeText').textContent = event.isRelay ? 
        'Relay: 1st=14pts, 2nd=10pts, 3rd=8pts, 4th=6pts, 5th=4pts, 6th=2pts' : 
        'Individual: 1st=7pts, 2nd=5pts, 3rd=4pts, 4th=3pts, 5th=2pts, 6th=1pt';
    
    const grid = document.getElementById('scoringGrid');
    grid.innerHTML = Object.keys(AppData.houses).map(house => {
        const currentScore = event.scores[house] || '';
        return `
            <div class="scoring-row">
                <span style="font-weight: 600;">${house}</span>
                ${[1,2,3,4,5,6].map(pos => `
                    <div class="position-select ${currentScore == pos ? 'selected-'+pos : ''}" 
                         onclick="selectPosition('${house}', ${pos})">
                        ${pos}
                    </div>
                `).join('')}
            </div>
        `;
    }).join('');
    
    document.getElementById('scoringModal').classList.add('open');
    document.getElementById('scoringOverlay').classList.add('show');
}

function closeScoringModal() {
    document.getElementById('scoringModal').classList.remove('open');
    document.getElementById('scoringOverlay').classList.remove('show');
    currentScoringEvent = null;
}

function selectPosition(house, position) {
    if (!currentScoringEvent) return;
    
    // Clear previous selection for this house
    document.querySelectorAll('.scoring-row').forEach(row => {
        if (row.querySelector('span').textContent === house) {
            row.querySelectorAll('.position-select').forEach(el => {
                el.className = 'position-select';
            });
        }
    });
    
    // Set new selection
    const rows = document.querySelectorAll('.scoring-row');
    for (let row of rows) {
        if (row.querySelector('span').textContent === house) {
            row.querySelectorAll('.position-select')[position-1].classList.add(`selected-${position}`);
            break;
        }
    }
    
    currentScoringEvent.scores[house] = position;
}

function saveEventScores() {
    if (!currentScoringEvent) return;
    
    // Validate no duplicate positions (except 0/unset)
    const positions = Object.values(currentScoringEvent.scores);
    const validPositions = positions.filter(p => p > 0);
    const uniquePositions = [...new Set(validPositions)];
    
    if (uniquePositions.length !== validPositions.length) {
        alert('Error: Duplicate positions detected! Each position can only be assigned once.');
        return;
    }
    
    currentScoringEvent.completed = true;
    
    // Add to history
    const pointsMap = currentScoringEvent.isRelay ? Scoring.relay : Scoring.individual;
    Object.entries(currentScoringEvent.scores).forEach(([house, pos]) => {
        if (pos > 0) {
            AppData.history.unshift({
                time: new Date().toLocaleTimeString(),
                event: `${currentScoringEvent.id}: ${currentScoringEvent.name}`,
                house,
                position: pos,
                points: pointsMap[pos],
                isRelay: currentScoringEvent.isRelay
            });
        }
    });
    
    saveToStorage();
    closeScoringModal();
    renderAll();
}

// ==========================================
// DISPLAY RENDERERS
// ==========================================

function renderStandings() {
    const container = document.getElementById('standingsContent');
    
    // Calculate totals
    const totals = {};
    const medals = {};
    Object.keys(AppData.houses).forEach(h => {
        totals[h] = 0;
        medals[h] = { gold: 0, silver: 0, bronze: 0 };
    });
    
    AppData.events.forEach(event => {
        if (event.completed) {
            const pointsMap = event.isRelay ? Scoring.relay : Scoring.individual;
            Object.entries(event.scores).forEach(([house, position]) => {
                if (position > 0 && totals[house] !== undefined) {
                    totals[house] += pointsMap[position];
                    if (position === 1) medals[house].gold++;
                    if (position === 2) medals[house].silver++;
                    if (position === 3) medals[house].bronze++;
                }
            });
        }
    });
    
    const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    const maxPoints = sorted[0]?.[1] || 1;
    
    if (sorted.length === 0 || sorted[0][1] === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🏊</div>
                <h3>No scores recorded yet</h3>
                <p>Click on events in the Event Status tab to enter scores</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = sorted.map(([house, points], index) => {
        const rank = index + 1;
        const houseData = AppData.houses[house];
        
        return `
            <div class="house-rank rank-${rank <= 3 ? rank : 'other'}">
                ${rank === 1 ? '<div class="winner-crown">👑</div>' : ''}
                <div class="rank-number">#${rank}</div>
                <div class="house-info">
                    <div class="house-name">
                        <span class="house-color-dot" style="background: ${houseData?.color || '#999'};"></span>
                        ${house}
                    </div>
                    <div class="house-stats">
                        🥇 ${medals[house].gold} • 🥈 ${medals[house].silver} • 🥉 ${medals[house].bronze}
                    </div>
                </div>
                <div class="points-display">
                    <div class="points">${points}</div>
                    <div class="points-label">points</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderBreakdown() {
    const container = document.getElementById('breakdownContent');
    
    const houseStats = {};
    Object.keys(AppData.houses).forEach(h => {
        houseStats[h] = {
            total: 0, gold: 0, silver: 0, bronze: 0,
            individual: 0, relays: 0,
            byPosition: { 1: 0, 2: 0, 3: 0, 4: 0 }
        };
    });
    
    AppData.events.forEach(event => {
        if (event.completed) {
            const pointsMap = event.isRelay ? Scoring.relay : Scoring.individual;
            Object.entries(event.scores).forEach(([house, pos]) => {
                if (pos > 0 && houseStats[house]) {
                    const pts = pointsMap[pos];
                    houseStats[house].total += pts;
                    if (event.isRelay) houseStats[house].relays += pts;
                    else houseStats[house].individual += pts;
                    
                    houseStats[house].byPosition[pos]++;
                    if (pos === 1) houseStats[house].gold++;
                    if (pos === 2) houseStats[house].silver++;
                    if (pos === 3) houseStats[house].bronze++;
                }
            });
        }
    });
    
    const sorted = Object.entries(houseStats).sort((a, b) => b[1].total - a[1].total);
    
    if (sorted[0]?.[1].total === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon">📊</div>
                <h3>No data available</h3>
                <p>Complete events to see detailed analytics</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = sorted.map(([house, stats]) => {
        const houseData = AppData.houses[house];
        return `
            <div class="breakdown-card" style="border-color: ${houseData?.color || '#e2e8f0'};">
                <div class="breakdown-header">
                    <div class="breakdown-title" style="color: ${houseData?.color || '#2d3748'};">
                        <span class="house-color-dot" style="background: ${houseData?.color || '#999'};"></span>
                        ${house}
                    </div>
                    <div style="font-size: 1.5rem; font-weight: 800; color: ${houseData?.color || '#2d3748'};">
                        ${stats.total}
                    </div>
                </div>
                
                <div class="medal-grid">
                    <div class="medal-box">
                        <div class="medal-icon">🥇</div>
                        <div class="medal-count" style="color: #744210;">${stats.gold}</div>
                        <div class="medal-label">Gold</div>
                    </div>
                    <div class="medal-box">
                        <div class="medal-icon">🥈</div>
                        <div class="medal-count" style="color: #4a5568;">${stats.silver}</div>
                        <div class="medal-label">Silver</div>
                    </div>
                    <div class="medal-box">
                        <div class="medal-icon">🥉</div>
                        <div class="medal-count" style="color: #744210;">${stats.bronze}</div>
                        <div class="medal-label">Bronze</div>
                    </div>
                </div>
                
                <div style="margin-top: 15px; font-size: 0.85rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>Individual Events:</span>
                        <strong>${stats.individual} pts</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>Relay Events:</span>
                        <strong>${stats.relays} pts</strong>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderEvents() {
    const container = document.getElementById('eventsContent');
    
    const day1Events = AppData.events.filter(e => e.day === 'Mar 30');
    const day2Events = AppData.events.filter(e => e.day === 'Mar 31');
    const day3Events = AppData.events.filter(e => e.day === 'Apr 1');
    
    let html = '<div style="grid-column: 1/-1; font-weight: 700; color: var(--mvs-blue); margin-bottom: 10px; font-size: 1.1rem;">📅 March 30 - Grade 1-2</div>';
    html += day1Events.map(event => renderEventCard(event)).join('');
    
    html += '<div style="grid-column: 1/-1; font-weight: 700; color: var(--mvs-blue); margin: 20px 0 10px; font-size: 1.1rem;">📅 March 31 - Grade 3-6</div>';
    html += day2Events.map(event => renderEventCard(event)).join('');
    
    html += '<div style="grid-column: 1/-1; font-weight: 700; color: var(--mvs-blue); margin: 20px 0 10px; font-size: 1.1rem;">📅 April 1 - Grade 7-9</div>';
    html += day3Events.map(event => renderEventCard(event)).join('');
    
    container.innerHTML = html;
}

function renderEventCard(event) {
    return `
        <div class="event-card ${event.completed ? 'completed' : ''}" onclick="openScoringModal('${event.id}')">
            <div class="event-header">
                <div>
                    <div class="event-name">${event.id}: ${event.name}</div>
                    ${event.isRelay ? '<span class="relay-badge">RELAY (14-10-8-6-4-2)</span>' : '<span style="font-size: 0.7rem; color: #718096;">Individual (7-5-4-3-2-1)</span>'}
                </div>
                <span class="event-status ${event.completed ? 'status-completed' : 'status-pending'}">
                    ${event.completed ? '✓ Done' : 'Score'}
                </span>
            </div>
            <div class="event-meta">${event.category} • ${event.day}</div>
            ${event.completed ? `
                <div class="event-scores">
                    ${Object.entries(event.scores).filter(([h,p]) => p > 0).map(([house, pos]) => {
                        const pts = event.isRelay ? Scoring.relay[pos] : Scoring.individual[pos];
                        return `<span class="score-badge" style="border-color: ${AppData.houses[house]?.color || '#999'};">${house}: ${pos} (${pts}pts)</span>`;
                    }).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function renderHistory() {
    const container = document.getElementById('historyContent');
    
    if (AppData.history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📜</div>
                <h3>No history recorded</h3>
                <p>Score updates will appear here in real-time</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = AppData.history.slice(0, 20).map(item => `
        <div class="history-item">
            <div class="history-time">${item.time} • ${item.event}</div>
            <div class="history-content">
                <strong style="color: ${AppData.houses[item.house]?.color || '#2d3748'};">${item.house}</strong> 
                finished <strong>${item.position === 1 ? '🥇 1st' : item.position === 2 ? '🥈 2nd' : item.position === 3 ? '🥉 3rd' : item.position + 'th'}</strong>
                ${item.isRelay ? '(Relay)' : '(Individual)'} 
                earning <strong>+${item.points} points</strong>
            </div>
        </div>
    `).join('');
}

// ==========================================
// VIDEO MANAGEMENT
// ==========================================

function renderVideos() {
    const container = document.getElementById('videoSidebar');
    if (!container) return;
    
    let html = AppData.videos.map(video => `
        <div class="video-card">
            <div class="video-container">
                <iframe src="${video.url}" allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-meta">Added ${video.added}</div>
            </div>
        </div>
    `).join('');
    
    html += `<div class="add-video-btn" onclick="focusVideoInput()">+ Add Video Stream</div>`;
    container.innerHTML = html;
}

function focusVideoInput() {
    toggleSettings();
    switchAdminTab('videos');
}

function addVideo() {
    const title = document.getElementById('videoTitle').value.trim();
    let url = document.getElementById('videoUrl').value.trim();
    
    if (!title || !url) {
        alert('Please enter both title and URL');
        return;
    }
    
    // Convert YouTube URLs
    if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        if (videoId) url = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        if (videoId) url = `https://www.youtube.com/embed/${videoId}`;
    }
    
    AppData.videos.push({
        id: Date.now(),
        title,
        url,
        added: new Date().toLocaleString()
    });
    
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoUrl').value = '';
    saveToStorage();
    renderVideos();
    renderAdminVideosList();
}

function removeVideo(id) {
    AppData.videos = AppData.videos.filter(v => v.id !== id);
    saveToStorage();
    renderVideos();
    renderAdminVideosList();
}

function renderAdminVideosList() {
    const container = document.getElementById('adminVideosList');
    if (!container) return;
    
    if (AppData.videos.length === 0) {
        container.innerHTML = '<p style="color: #a0aec0; text-align: center;">No videos added</p>';
        return;
    }
    
    container.innerHTML = AppData.videos.map(v => `
        <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
            <div style="font-weight: 600;">${v.title}</div>
            <div style="font-size: 0.8rem; color: #718096; margin-bottom: 5px;">${v.url.substring(0, 50)}...</div>
            <button class="btn btn-danger" onclick="removeVideo(${v.id})" style="padding: 5px 10px; font-size: 0.8rem;">Remove</button>
        </div>
    `).join('');
}

// ==========================================
// SETTINGS & UTILITIES
// ==========================================

function saveRotationSettings() {
    const interval = parseInt(document.getElementById('rotationInterval').value);
    const autoRotate = document.getElementById('autoRotate').checked;
    
    if (interval < 5 || interval > 60) {
        alert('Interval must be between 5 and 60 seconds');
        return;
    }
    
    AppData.settings.rotationInterval = interval;
    AppData.settings.autoRotate = autoRotate;
    saveToStorage();
    
    clearInterval(rotationTimer);
    clearInterval(progressTimer);
    if (autoRotate) startRotation();
    
    alert('Settings saved!');
}

function updateCounts() {
    const pCount = document.getElementById('participantCount');
    const eCount = document.getElementById('eventCount');
    if (pCount) pCount.textContent = AppData.participants.length;
    if (eCount) eCount.textContent = AppData.events.length;
}

// ==========================================
// DATA IMPORT/EXPORT
// ==========================================

function exportData() {
    const dataStr = JSON.stringify(AppData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mvs-gala-2026-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const data = JSON.parse(event.target.result);
                if (confirm('This will overwrite all current data. Continue?')) {
                    Object.assign(AppData, data);
                    saveToStorage();
                    renderAll();
                    alert('Data imported successfully!');
                }
            } catch (err) {
                alert('Invalid file format');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function resetAllData() {
    if (confirm('⚠️ WARNING: This will delete ALL data including houses, participants, scores, and history. This cannot be undone!')) {
        if (confirm('Are you absolutely sure? Click OK to confirm.')) {
            localStorage.removeItem('mvsGala2026');
            location.reload();
        }
    }
}

// ==========================================
// INITIALIZE APP
// ==========================================

document.addEventListener('DOMContentLoaded', init);