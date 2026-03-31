#!/usr/bin/env python3
"""
MVS Gala 2026 - Automated Test Report Generator
Tests: Code Quality, Security, Performance, Firebase Rules
"""

import json
import re
import sys
from pathlib import Path
from datetime import datetime

class GalaTestReport:
    def __init__(self):
        self.results = {
            'timestamp': datetime.now().isoformat(),
            'summary': {
                'total_checks': 0,
                'passed': 0,
                'warnings': 0,
                'failed': 0
            },
            'categories': {}
        }
        
    def add_result(self, category, check_name, status, message, details=None):
        """Add a test result"""
        if category not in self.results['categories']:
            self.results['categories'][category] = []
            
        self.results['categories'][category].append({
            'check': check_name,
            'status': status,
            'message': message,
            'details': details or {}
        })
        
        self.results['summary']['total_checks'] += 1
        if status == 'PASS':
            self.results['summary']['passed'] += 1
        elif status == 'WARN':
            self.results['summary']['warnings'] += 1
        else:
            self.results['summary']['failed'] += 1
            
    def analyze_html_file(self, filepath):
        """Analyze the main HTML file for issues"""
        print(f"Analyzing {filepath}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check 1: File size
        size_kb = len(content) / 1024
        if size_kb > 500:
            self.add_result('Build Strength', 'File Size', 'WARN', 
                f'HTML file is {size_kb:.1f}KB - consider optimization', 
                {'size_kb': size_kb})
        else:
            self.add_result('Build Strength', 'File Size', 'PASS', 
                f'HTML file size is acceptable ({size_kb:.1f}KB)')
                
        # Check 2: Firebase configuration
        if 'apiKey' in content and 'databaseURL' in content:
            self.add_result('Database Connectivity', 'Firebase Config', 'PASS', 
                'Firebase configuration present')
        else:
            self.add_result('Database Connectivity', 'Firebase Config', 'FAIL', 
                'Firebase configuration missing or incomplete')
            
        # Check 3: Security - Check for hardcoded secrets
        # Look for potential issues
        security_issues = []
        
        if 'http://' in content and 'https://' not in content:
            security_issues.append('Mixed content - HTTP URLs found')
            
        if re.search(r'password\s*=\s*["\'][^"\']+["\']', content, re.IGNORECASE):
            security_issues.append('Potential hardcoded password')
            
        if len(security_issues) > 0:
            self.add_result('Security', 'Static Analysis', 'WARN', 
                f'Found {len(security_issues)} potential issues', 
                {'issues': security_issues})
        else:
            self.add_result('Security', 'Static Analysis', 'PASS', 
                'No obvious security issues detected')
            
        # Check 4: Code quality metrics
        lines = content.split('\n')
        total_lines = len(lines)
        
        # Count functions
        functions = re.findall(r'function\s+\w+', content)
        self.add_result('Code Quality', 'Function Count', 'PASS', 
            f'Found {len(functions)} functions', {'count': len(functions)})
            
        # Check for error handling
        error_handlers = len(re.findall(r'try\s*\{', content))
        self.add_result('Bug Prevention', 'Error Handling', 'PASS' if error_handlers > 10 else 'WARN', 
            f'Found {error_handlers} try-catch blocks', {'count': error_handlers})
            
        # Check for console.log (should be minimal in production)
        console_logs = len(re.findall(r'console\.(log|error|warn)', content))
        if console_logs > 50:
            self.add_result('Code Quality', 'Console Statements', 'WARN', 
                f'Found {console_logs} console statements - consider cleanup for production', 
                {'count': console_logs})
        else:
            self.add_result('Code Quality', 'Console Statements', 'PASS', 
                f'Reasonable number of console statements ({console_logs})', 
                {'count': console_logs})
                
        # Check 5: Feature completeness
        features = {
            'Public View': 'checkPublicView' in content,
            'Firebase Sync': 'syncToFirebase' in content,
            'Score Modal': 'scoreModal' in content,
            'Tab Navigation': 'manualTabSwitch' in content,
            'QR Code': 'QRCode' in content or 'generatePublicLink' in content,
            'Auto Rotation': 'startRotation' in content,
            'Leaderboard': 'renderStandings' in content,
            'Event Management': 'renderEvents' in content,
            'Points Breakdown': 'renderBreakdown' in content,
            'Score History': 'renderHistory' in content
        }
        
        missing = [f for f, present in features.items() if not present]
        if missing:
            self.add_result('Feature Strength', 'Core Features', 'WARN', 
                f'Missing features: {", ".join(missing)}', 
                {'missing': missing, 'present': [f for f, p in features.items() if p]})
        else:
            self.add_result('Feature Strength', 'Core Features', 'PASS', 
                'All core features present', {'features': list(features.keys())})
                
        # Check 6: Responsive design
        media_queries = len(re.findall(r'@media', content))
        self.add_result('Feature Strength', 'Responsive Design', 'PASS' if media_queries > 0 else 'WARN', 
            f'Found {media_queries} media queries', {'count': media_queries})
            
        # Check 7: CSS architecture
        css_classes = len(set(re.findall(r'\.[a-zA-Z_-][a-zA-Z0-9_-]*', content)))
        self.add_result('Code Quality', 'CSS Classes', 'PASS', 
            f'Found {css_classes} unique CSS classes', {'count': css_classes})
            
        return True
        
    def analyze_js_files(self):
        """Analyze JavaScript files"""
        js_files = list(Path('.').glob('*.js'))
        
        for js_file in js_files:
            if js_file.name == 'test-suite.js':
                continue
                
            print(f"Analyzing {js_file}...")
            
            with open(js_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check for module exports
            if 'export' in content or 'module.exports' in content:
                self.add_result('Code Quality', f'{js_file.name} - Module Structure', 'PASS', 
                    'Uses ES6 modules or CommonJS')
            else:
                self.add_result('Code Quality', f'{js_file.name} - Module Structure', 'WARN', 
                    'No module exports found - consider using modules')
                    
            # Check for JSDoc comments
            jsdoc_count = len(re.findall(r'/\*\*', content))
            self.add_result('Code Quality', f'{js_file.name} - Documentation', 'PASS' if jsdoc_count > 5 else 'WARN', 
                f'Found {jsdoc_count} JSDoc blocks', {'count': jsdoc_count})
                
    def check_firebase_rules(self):
        """Check if Firebase rules file exists and analyze it"""
        rules_file = Path('firebase-rules.json')
        
        if not rules_file.exists():
            self.add_result('Database Connectivity', 'Firebase Rules File', 'WARN', 
                'firebase-rules.json not found - create one for deployment')
            return
            
        with open(rules_file, 'r') as f:
            rules = json.load(f)
            
        # Check for open rules (security risk)
        rules_str = json.dumps(rules)
        if '".read": true' in rules_str and '".write": true' in rules_str:
            self.add_result('Security', 'Firebase Rules', 'WARN', 
                'Rules allow public read/write - restrict for production', 
                {'rules': rules})
        else:
            self.add_result('Security', 'Firebase Rules', 'PASS', 
                'Firebase rules have restrictions')
                
    def check_dependencies(self):
        """Check for package.json and dependencies"""
        pkg_file = Path('package.json')
        
        if pkg_file.exists():
            with open(pkg_file, 'r') as f:
                pkg = json.load(f)
                
            deps = pkg.get('dependencies', {})
            dev_deps = pkg.get('devDependencies', {})
            
            self.add_result('Build Strength', 'Dependencies', 'PASS', 
                f'Found {len(deps)} dependencies, {len(dev_deps)} dev dependencies', 
                {'dependencies': list(deps.keys()), 'devDependencies': list(dev_deps.keys())})
        else:
            self.add_result('Build Strength', 'Dependencies', 'WARN', 
                'No package.json found - project has no dependency management')
                
    def generate_report(self):
        """Generate and save the test report"""
        report_path = Path('test-report.json')
        
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
            
        print(f"\nReport saved to: {report_path}")
        
        # Generate Markdown report
        md_report = self.generate_markdown_report()
        md_path = Path('TEST_RESULTS.md')
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(md_report)
            
        print(f"Markdown report saved to: {md_path}")
        
    def generate_markdown_report(self):
        """Generate a human-readable Markdown report"""
        s = self.results['summary']
        
        md = f"""# MVS Gala 2026 - Test Report

**Generated:** {self.results['timestamp']}

## Summary

| Metric | Count |
|--------|-------|
| Total Checks | {s['total_checks']} |
| ✅ Passed | {s['passed']} |
| ⚠️ Warnings | {s['warnings']} |
| ❌ Failed | {s['failed']} |
| **Pass Rate** | {(s['passed']/s['total_checks']*100 if s['total_checks'] > 0 else 0):.1f}% |

## Detailed Results

"""
        
        for category, checks in self.results['categories'].items():
            md += f"\n### {category}\n\n"
            md += "| Status | Check | Message |\n"
            md += "|--------|-------|---------|\n"
            
            for check in checks:
                icon = '✅' if check['status'] == 'PASS' else ('⚠️' if check['status'] == 'WARN' else '❌')
                status_icon = 'OK' if check['status'] == 'PASS' else ('WARN' if check['status'] == 'WARN' else 'FAIL')
        md += f"| {status_icon} | {check['check']} | {check['message']} |\n"
                
        md += """\n## Recommendations

"""
        
        # Generate recommendations based on results
        if s['failed'] > 0:
            md += "### Critical Issues\n\n"
            for category, checks in self.results['categories'].items():
                for check in checks:
                    if check['status'] == 'FAIL':
                        md += f"- **{check['check']}**: {check['message']}\n"
                        
        if s['warnings'] > 0:
            md += "\n### Warnings\n\n"
            for category, checks in self.results['categories'].items():
                for check in checks:
                    if check['status'] == 'WARN':
                        md += f"- **{check['check']}**: {check['message']}\n"
                        
        md += """\n### Next Steps

1. **Fix Critical Issues**: Address any failed checks immediately
2. **Review Warnings**: Evaluate warnings and fix where necessary
3. **Run Browser Tests**: Use the in-browser test suite (Ctrl+Shift+T)
4. **Test Firebase**: Verify database connectivity with real devices
5. **Performance Testing**: Run load tests with multiple concurrent users

---

*This report was auto-generated by the MVS Gala 2026 Test Suite*
"""
        
        return md
        
    def print_summary(self):
        """Print summary to console"""
        s = self.results['summary']
        
        print("\n" + "="*60)
        print("  TEST SUMMARY")
        print("="*60)
        print(f"Total Checks:  {s['total_checks']}")
        print(f"[OK] Passed:     {s['passed']}")
        print(f"[!]  Warnings:   {s['warnings']}")
        print(f"[X] Failed:     {s['failed']}")
        print("="*60)
        
        if s['failed'] > 0:
            print("\n[X] CRITICAL ISSUES FOUND - PLEASE FIX BEFORE DEPLOYMENT")
            return 1
        elif s['warnings'] > 0:
            print("\n[!] WARNINGS FOUND - REVIEW RECOMMENDED")
            return 0
        else:
            print("\n[OK] ALL CHECKS PASSED")
            return 0

def main():
    print("="*60)
    print("  MVS GALA 2026 - AUTOMATED TEST REPORT")
    print("="*60)
    print()
    
    report = GalaTestReport()
    
    # Run all tests
    html_file = Path('Swim.html')
    if html_file.exists():
        report.analyze_html_file(html_file)
    else:
        print("ERROR: Swim.html not found!")
        return 1
        
    report.analyze_js_files()
    report.check_firebase_rules()
    report.check_dependencies()
    
    # Generate reports
    report.generate_report()
    
    # Print summary
    exit_code = report.print_summary()
    
    return exit_code

if __name__ == '__main__':
    sys.exit(main())
