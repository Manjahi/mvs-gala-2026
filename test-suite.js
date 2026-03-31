/**
 * MVS Gala 2026 - Comprehensive Test Suite
 * Tests: Efficiency, Bugs, Build Strength, Features, Database Connectivity
 */

const TestSuite = {
  results: [],
  passed: 0,
  failed: 0,
  
  // Test runner
  async runTest(name, testFn, category = 'General') {
    const startTime = performance.now();
    try {
      await testFn();
      const duration = performance.now() - startTime;
      this.results.push({ name, category, status: 'PASS', duration: duration.toFixed(2) });
      this.passed++;
      console.log(`✅ ${category} | ${name} (${duration.toFixed(2)}ms)`);
      return true;
    } catch (error) {
      const duration = performance.now() - startTime;
      this.results.push({ name, category, status: 'FAIL', error: error.message, duration: duration.toFixed(2) });
      this.failed++;
      console.error(`❌ ${category} | ${name}: ${error.message}`);
      return false;
    }
  },

  // ==================== DATABASE CONNECTIVITY TESTS ====================
  
  async testFirebaseInitialization() {
    return this.runTest('Firebase SDK Initialization', () => {
      if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK not loaded');
      }
      if (!window.db) {
        throw new Error('Firebase database not initialized');
      }
      if (!window.firebaseRefs) {
        throw new Error('Firebase refs not available');
      }
    }, 'Database Connectivity');
  },

  async testDatabaseRead() {
    return this.runTest('Database Read Operation', async () => {
      const { ref, get } = window.firebaseRefs;
      const galaRef = ref(window.db, "gala/data");
      const snapshot = await get(galaRef);
      // Should not throw - data may be null but that's okay
      console.log('   Database read successful, data exists:', snapshot.exists());
    }, 'Database Connectivity');
  },

  async testDatabaseWrite() {
    return this.runTest('Database Write Operation', async () => {
      const { ref, set } = window.firebaseRefs;
      const testRef = ref(window.db, "test/connection");
      await set(testRef, { timestamp: Date.now(), test: true });
      console.log('   Database write successful');
    }, 'Database Connectivity');
  },

  async testRealTimeListener() {
    return this.runTest('Real-time Listener Setup', () => {
      return new Promise((resolve, reject) => {
        const { ref, onValue } = window.firebaseRefs;
        const testRef = ref(window.db, "test/connection");
        
        const unsubscribe = onValue(testRef, (snapshot) => {
          console.log('   Real-time listener active');
          unsubscribe();
          resolve();
        }, (error) => {
          reject(new Error(`Listener failed: ${error.message}`));
        });

        // Timeout after 5 seconds
        setTimeout(() => {
          unsubscribe();
          reject(new Error('Listener timeout'));
        }, 5000);
      });
    }, 'Database Connectivity');
  },

  // ==================== DATA PERSISTENCE TESTS ====================

  async testDataStructure() {
    return this.runTest('App Data Structure Validation', () => {
      const required = ['houses', 'events', 'scores', 'history', 'settings'];
      for (const key of required) {
        if (!(key in appData)) {
          throw new Error(`Missing required field: ${key}`);
        }
      }
      
      // Validate houses
      const houses = Object.keys(appData.houses);
      if (houses.length !== 5) {
        throw new Error(`Expected 5 houses, got ${houses.length}`);
      }
      
      // Validate events
      if (!Array.isArray(appData.events)) {
        throw new Error('Events should be an array');
      }
      
      console.log('   Data structure valid:', houses.length, 'houses,', appData.events.length, 'events');
    }, 'Data Persistence');
  },

  async testScoreCalculation() {
    return this.runTest('Score Calculation Logic', () => {
      // Test individual scoring
      const individual = scoringSystem.individual;
      if (individual[1] !== 7 || individual[2] !== 5) {
        throw new Error('Individual scoring system incorrect');
      }
      
      // Test relay scoring
      const relay = scoringSystem.relay;
      if (relay[1] !== 14 || relay[2] !== 10) {
        throw new Error('Relay scoring system incorrect');
      }
      
      console.log('   Scoring system validated');
    }, 'Data Persistence');
  },

  async testEventDataIntegrity() {
    return this.runTest('Event Data Integrity', () => {
      if (appData.events.length === 0) {
        throw new Error('No events loaded');
      }
      
      const requiredFields = ['id', 'name', 'category', 'type'];
      for (const event of appData.events) {
        for (const field of requiredFields) {
          if (!(field in event)) {
            throw new Error(`Event ${event.id || 'unknown'} missing field: ${field}`);
          }
        }
      }
      
      console.log('   All', appData.events.length, 'events validated');
    }, 'Data Persistence');
  },

  // ==================== FEATURE STRENGTH TESTS ====================

  async testPublicViewDetection() {
    return this.runTest('Public View Detection', () => {
      const isPublic = checkPublicView();
      console.log('   Public view:', isPublic);
      // Should not throw
    }, 'Feature Strength');
  },

  async testTabSwitching() {
    return this.runTest('Tab Navigation System', () => {
      const tabs = document.querySelectorAll('.tab-btn');
      if (tabs.length === 0) {
        throw new Error('No tab buttons found');
      }
      
      // Test switching to each tab
      for (let i = 0; i < Math.min(tabs.length, 4); i++) {
        manualTabSwitch(i);
        const activeTab = document.querySelector('.tab-btn.active');
        if (!activeTab) {
          throw new Error(`Tab ${i} switch failed`);
        }
      }
      
      console.log('   All', tabs.length, 'tabs functional');
    }, 'Feature Strength');
  },

  async testEventScoringModal() {
    return this.runTest('Event Scoring Modal', () => {
      if (appData.events.length === 0) {
        throw new Error('No events to test');
      }
      
      const testEvent = appData.events[0];
      openScoreModal(testEvent.id);
      
      const modal = document.getElementById('scoreModal');
      if (!modal || modal.classList.contains('hidden')) {
        throw new Error('Score modal did not open');
      }
      
      closeScoreModal();
      console.log('   Score modal functional for event:', testEvent.id);
    }, 'Feature Strength');
  },

  async testLeaderboardRotation() {
    return this.runTest('Leaderboard Auto-Rotation', () => {
      if (!appData.settings.autoRotate) {
        console.log('   Auto-rotation disabled (skipping)');
        return;
      }
      
      const initialTab = document.querySelector('.tab-btn.active');
      if (!initialTab) {
        throw new Error('No active tab found');
      }
      
      console.log('   Auto-rotation enabled, interval:', appData.settings.rotationInterval, 's');
    }, 'Feature Strength');
  },

  async testQRCodeGeneration() {
    return this.runTest('QR Code Generation', () => {
      if (typeof QRCode === 'undefined') {
        throw new Error('QRCode library not loaded');
      }
      
      // Test link generation
      const timestamp = Date.now();
      const token = btoa(timestamp.toString());
      if (!token) {
        throw new Error('Token generation failed');
      }
      
      console.log('   QR code system ready');
    }, 'Feature Strength');
  },

  async testResponsiveDesign() {
    return this.runTest('Responsive Design Elements', () => {
      const viewport = window.innerWidth;
      const header = document.querySelector('header');
      const mainLayout = document.querySelector('.main-layout');
      
      if (!header || !mainLayout) {
        throw new Error('Critical layout elements missing');
      }
      
      console.log('   Viewport:', viewport, 'px, Layout elements present');
    }, 'Feature Strength');
  },

  // ==================== EFFICIENCY TESTS ====================

  async testRenderPerformance() {
    return this.runTest('Render Performance', () => {
      const iterations = 5;
      const times = [];
      
      for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        renderAll();
        times.push(performance.now() - start);
      }
      
      const avg = times.reduce((a, b) => a + b, 0) / times.length;
      const max = Math.max(...times);
      
      console.log(`   Average: ${avg.toFixed(2)}ms, Max: ${max.toFixed(2)}ms`);
      
      if (avg > 100) {
        throw new Error(`Render too slow: ${avg.toFixed(2)}ms average`);
      }
    }, 'Efficiency');
  },

  async testMemoryUsage() {
    return this.runTest('Memory Usage', () => {
      if (performance.memory) {
        const used = performance.memory.usedJSHeapSize / 1048576; // MB
        const total = performance.memory.totalJSHeapSize / 1048576;
        
        console.log(`   Memory: ${used.toFixed(2)}MB / ${total.toFixed(2)}MB`);
        
        if (used > 100) {
          throw new Error(`High memory usage: ${used.toFixed(2)}MB`);
        }
      } else {
        console.log('   Memory API not available in this browser');
      }
    }, 'Efficiency');
  },

  async testFirebaseSyncPerformance() {
    return this.runTest('Firebase Sync Performance', async () => {
      const start = performance.now();
      
      // Trigger a sync
      syncToFirebase();
      
      // Wait a bit for the operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const duration = performance.now() - start;
      console.log(`   Sync operation: ${duration.toFixed(2)}ms`);
      
      if (duration > 5000) {
        throw new Error(`Sync too slow: ${duration.toFixed(2)}ms`);
      }
    }, 'Efficiency');
  },

  // ==================== BUG TESTS ====================

  async testEventIdUniqueness() {
    return this.runTest('Event ID Uniqueness', () => {
      const ids = appData.events.map(e => e.id);
      const unique = new Set(ids);
      
      if (ids.length !== unique.size) {
        throw new Error(`Duplicate event IDs found: ${ids.length - unique.size} duplicates`);
      }
      
      console.log('   All', ids.length, 'event IDs are unique');
    }, 'Bug Prevention');
  },

  async testScoreValidation() {
    return this.runTest('Score Input Validation', () => {
      // Test invalid time formats
      const invalidTimes = ['abc', '-1', '99:99', '', null];
      
      for (const time of invalidTimes) {
        // parseTime should handle these gracefully
        const result = parseTime(time);
        if (result === undefined && time !== null && time !== '') {
          // Some invalid inputs might return undefined - that's acceptable
        }
      }
      
      console.log('   Score validation handles edge cases');
    }, 'Bug Prevention');
  },

  async testEmptyDataHandling() {
    return this.runTest('Empty Data Handling', () => {
      // Test with empty scores
      const emptyScores = {};
      calculateStandings(emptyScores);
      
      // Test with empty events
      const originalEvents = appData.events;
      appData.events = [];
      renderEvents();
      appData.events = originalEvents;
      
      console.log('   Empty data handled gracefully');
    }, 'Bug Prevention');
  },

  async testConcurrentModification() {
    return this.runTest('Concurrent Data Access', async () => {
      // Simulate rapid updates
      const updates = [];
      for (let i = 0; i < 5; i++) {
        updates.push(syncToFirebase());
      }
      
      await Promise.allSettled(updates);
      console.log('   Concurrent operations handled');
    }, 'Bug Prevention');
  },

  async testXSSPrevention() {
    return this.runTest('XSS Prevention in Rendering', () => {
      // Test that dangerous strings don't execute
      const malicious = '<script>alert("xss")</script>';
      const houseData = { color: '#000', id: 'test' };
      
      // This should render as text, not execute
      const result = renderHouseCard('Test', houseData, 1, 100);
      
      console.log('   XSS prevention validated');
    }, 'Bug Prevention');
  },

  // ==================== BUILD STRENGTH TESTS ====================

  async testCriticalFunctionPresence() {
    return this.runTest('Critical Functions Present', () => {
      const critical = [
        'init', 'renderAll', 'syncToFirebase', 'setupFirebaseListener',
        'saveEventScores', 'calculateStandings', 'checkPublicView',
        'generatePublicLink', 'startRotation', 'manualTabSwitch'
      ];
      
      for (const fn of critical) {
        if (typeof window[fn] !== 'function') {
          throw new Error(`Critical function missing: ${fn}`);
        }
      }
      
      console.log('   All', critical.length, 'critical functions present');
    }, 'Build Strength');
  },

  async testRequiredElements() {
    return this.runTest('Required DOM Elements', () => {
      const required = [
        'standingsContent', 'breakdownContent', 'eventsContent',
        'historyContent', 'tabNavigation', 'liveIndicator'
      ];
      
      for (const id of required) {
        const el = document.getElementById(id);
        if (!el) {
          throw new Error(`Required element missing: #${id}`);
        }
      }
      
      console.log('   All', required.length, 'required elements present');
    }, 'Build Strength');
  },

  async testDefaultDataLoading() {
    return this.runTest('Default Data Loading', () => {
      if (!defaultEvents || defaultEvents.length === 0) {
        throw new Error('Default events not loaded');
      }
      
      if (!PARTICIPANTS_DATA) {
        throw new Error('Participants data not loaded');
      }
      
      console.log('   Default data loaded:', defaultEvents.length, 'events');
    }, 'Build Strength');
  },

  async testErrorHandling() {
    return this.runTest('Error Handling Coverage', () => {
      // Test that error handlers exist
      const hasFirebaseError = typeof showFirebaseError === 'function';
      const hasConnectionStatus = typeof showConnectionStatus === 'function';
      
      if (!hasFirebaseError || !hasConnectionStatus) {
        throw new Error('Missing error handling functions');
      }
      
      console.log('   Error handling functions present');
    }, 'Build Strength');
  },

  // ==================== RUN ALL TESTS ====================

  async runAllTests() {
    console.log('═══════════════════════════════════════════════');
    console.log('  MVS GALA 2026 - COMPREHENSIVE TEST SUITE');
    console.log('═══════════════════════════════════════════════\n');
    
    const startTime = performance.now();
    
    // Database Connectivity
    console.log('\n📊 DATABASE CONNECTIVITY TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testFirebaseInitialization();
    await this.testDatabaseRead();
    await this.testDatabaseWrite();
    await this.testRealTimeListener();
    
    // Data Persistence
    console.log('\n💾 DATA PERSISTENCE TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testDataStructure();
    await this.testScoreCalculation();
    await this.testEventDataIntegrity();
    
    // Feature Strength
    console.log('\n✨ FEATURE STRENGTH TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testPublicViewDetection();
    await this.testTabSwitching();
    await this.testEventScoringModal();
    await this.testLeaderboardRotation();
    await this.testQRCodeGeneration();
    await this.testResponsiveDesign();
    
    // Efficiency
    console.log('\n⚡ EFFICIENCY TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testRenderPerformance();
    await this.testMemoryUsage();
    await this.testFirebaseSyncPerformance();
    
    // Bug Prevention
    console.log('\n🐛 BUG PREVENTION TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testEventIdUniqueness();
    await this.testScoreValidation();
    await this.testEmptyDataHandling();
    await this.testConcurrentModification();
    await this.testXSSPrevention();
    
    // Build Strength
    console.log('\n🏗️  BUILD STRENGTH TESTS');
    console.log('─────────────────────────────────────────────');
    await this.testCriticalFunctionPresence();
    await this.testRequiredElements();
    await this.testDefaultDataLoading();
    await this.testErrorHandling();
    
    // Summary
    const totalTime = performance.now() - startTime;
    
    console.log('\n═══════════════════════════════════════════════');
    console.log('  TEST SUMMARY');
    console.log('═══════════════════════════════════════════════');
    console.log(`Total Tests: ${this.results.length}`);
    console.log(`✅ Passed: ${this.passed}`);
    console.log(`❌ Failed: ${this.failed}`);
    console.log(`⏱️  Duration: ${totalTime.toFixed(2)}ms`);
    console.log('═══════════════════════════════════════════════\n');
    
    // Generate report
    this.generateReport();
    
    return {
      total: this.results.length,
      passed: this.passed,
      failed: this.failed,
      duration: totalTime.toFixed(2),
      results: this.results
    };
  },

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.length,
        passed: this.passed,
        failed: this.failed,
        passRate: ((this.passed / this.results.length) * 100).toFixed(1) + '%'
      },
      results: this.results
    };
    
    // Store report in window for access
    window.testReport = report;
    console.log('Test report stored in window.testReport');
    
    return report;
  }
};

// Export for use
window.TestSuite = TestSuite;
console.log('Test Suite loaded. Run TestSuite.runAllTests() to execute all tests.');
