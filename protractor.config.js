// TO RUN THE TESTS
//
// The first time, run:
//   ./node_modules/.bin/webdriver-manager update
// Make sure the test server is running. Then do.
//   ./node_modules/.bin/protractor protractor.config.js

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e_test/*.js'],

  // For angular2 tests
  useAllAngular2AppRoots: true,

  baseUrl: 'http://localhost:8080'
};