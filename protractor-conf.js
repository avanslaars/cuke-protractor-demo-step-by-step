exports.config = {
  baseUrl: 'http://localhost:8080',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'cucumber',
  specs: [
    './features/*.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    version: '',
    platform: 'ANY'
  },
  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    format: 'progress'
  }
}
