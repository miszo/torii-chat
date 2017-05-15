const webpackConfig = require('./webpack.karma.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/**/*spec.js',
      './src/**/*.js'
    ],
    exclude: [
      './src/vendor.js'
    ],
    preprocessors: {
      './src/**/*.js' : ['webpack', 'eslint'],
      './src/**/*spec.js' : ['webpack', 'eslint']
    },
    eslint: {
      engine: {
        configFile: './eslintrc',
        emitError: true,
        emitWarning: true
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig
  });
};
