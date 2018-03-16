exports.config = {

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 50000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ["disable-infobars=true"]
    }
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  /* params: {
  		testEnv: 'test'
      },*/

  cucumberOpts: {
    require: [ 'step-definitions/*.js',
                'support/hook.js',
                'support/globalenv.js'
             ],
    tags: false,
    //format: ['json:report/results.json', 'pretty'],
    format : 'pretty',
    profile: false,
    'no-source': true
  },


  onPrepare: function () {
      browser.manage().window().maximize();
    },
     // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
     ignoreUncaughtExceptions: true,
     untrackOutstandingTimeouts: true

};