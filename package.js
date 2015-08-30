Package.describe({
  name: 'urigo:angular-blaze-template',
  version: '0.0.1',
  summary: 'Include Blaze templates in your angular-meteor application.',
  git: 'https://github.com/Urigo/angular-blaze-template',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('angular@1.0.0-rc.3', 'client');
  api.addFiles('angular-blaze-template.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-blaze-template');
  api.addFiles('angular-blaze-template-tests.js');
});
