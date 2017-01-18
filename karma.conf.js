module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'public/js/app.js',
      'test/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['spec'],
    plugins: ['karma-spec-reporter'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
    });
};