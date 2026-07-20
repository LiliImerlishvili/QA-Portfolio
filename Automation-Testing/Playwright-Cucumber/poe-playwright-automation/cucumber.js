module.exports = {
  default: {
    require: [
      'support/world.ts',
      'support/hooks.ts',
      'step-definitions/ui/auth.steps.ts'
    ],
    requireModule: ['tsx/cjs'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    paths: ['features/**/*.feature'],
    publishQuiet: true,
  },
};
