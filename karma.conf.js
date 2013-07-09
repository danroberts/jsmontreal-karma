// Karma configuration
// Generated on Tue Jul 09 2013 11:41:16 GMT-0400 (EDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'js/lib/jquery/jquery.js',
  'spec/support/jasmine-jquery.js',
  'js/lib/underscore/underscore.js',
  'js/lib/backbone/backbone.js',
  'js/lib/**/*.js',
  'js/models/*.js',
  'js/collections/*.js',
  'js/views/*.js',
  'js/**/*.js',
  'spec/**/*.js',

   // fixtures
  {pattern: 'spec/fixtures/**/*.html', watched: true, served: true, included: false},
  {pattern: 'spec/fixtures/**/*.json', watched: true, served: true, included: false},
  {pattern: 'spec/fixtures/**/*.xml', watched: true, served: true, included: false},


];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'Safari'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
