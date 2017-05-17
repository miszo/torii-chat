angular
  .module('app',
  [
    'ui.router',
    'ngMaterial',
    'authModule',
  ]);


require('./app.route');
require('./app.component');

require('./auth');