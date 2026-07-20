import * as path from 'path';
import * as fs from 'fs';

// Package has no official TypeScript types; load it at runtime.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const reporter = require('multiple-cucumber-html-reporter');

const reportDir = path.join(process.cwd(), 'reports');
const jsonFile = path.join(reportDir, 'cucumber-report.json');

if (!fs.existsSync(jsonFile)) {
  console.error('cucumber-report.json not found. Run tests first.');
  process.exit(1);
}

reporter.generate({
  jsonDir: reportDir,
  reportPath: path.join(reportDir, 'html-report'),
  metadata: {
    browser: { name: process.env.BROWSER ?? 'chromium', version: 'latest' },
    device: 'Local',
    platform: { name: process.platform },
  },
  customData: {
    title: 'GetBotAI Automation Report',
    data: [
      { label: 'Project', value: 'GetBotAI' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toISOString() },
    ],
  },
});
