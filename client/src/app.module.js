angular
  .module('app',
  [
    'ui.router',
    'ngMaterial',
    'routesModule',
    'authModule',
    'userModule'
  ]);


require('./app.component');

require('./routes');
require('./auth');
require('./user');

