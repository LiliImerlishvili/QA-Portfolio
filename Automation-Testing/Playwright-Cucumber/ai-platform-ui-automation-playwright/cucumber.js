const common = {
  requireModule: ['ts-node/register'],
  require: [
    'src/support/world.ts',    'src/support/hooks.ts',
    'step-definitions/**/*.ts',
  ],
  format: [
    'progress-bar',
    'json:reports/cucumber-report.json',
    'html:reports/cucumber-report.html',
    'rerun:reports/.cucumber-rerun',
  ],
  formatOptions: {
    snippetInterface: 'async-await',
  },
  publishQuiet: true,
};

module.exports = {
  default: {
    ...common,
    paths: ['features/**/*.feature'],
  },
  api: {
    ...common,
    paths: ['features/api/**/*.feature'],
    tags: '@api',
  },
  ui: {
    ...common,
    paths: ['features/ui/**/*.feature'],
    tags: '@ui',
  },
  smoke: {
    ...common,
    paths: ['features/**/*.feature'],
    tags: '@smoke',
  },
  rerun: {
    ...common,
    paths: ['@reports/.cucumber-rerun'],
  },
};
