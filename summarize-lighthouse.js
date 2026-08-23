const fs = require('fs');
const reportPath = process.argv[2];
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
const summary = {
  performance: Math.round(report.categories.performance.score * 100),
  accessibility: Math.round(report.categories.accessibility.score * 100),
  bestPractices: Math.round(report.categories['best-practices'].score * 100),
  seo: Math.round(report.categories.seo.score * 100),
  metrics: {
    firstContentfulPaint: report.audits['first-contentful-paint'].displayValue,
    largestContentfulPaint: report.audits['largest-contentful-paint'].displayValue,
    totalBlockingTime: report.audits['total-blocking-time'].displayValue,
    cumulativeLayoutShift: report.audits['cumulative-layout-shift'].displayValue,
    speedIndex: report.audits['speed-index'].displayValue
  }
};
console.log(JSON.stringify(summary, null, 2));
