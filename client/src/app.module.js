angular
  .module('app',
  [
    'ui.router',
    'ngMaterial',
    'routesModule',
    'authModule',
    'userModule'
  ])
  .run(function($http, $state) {
    if (localStorage.getItem('id_token')) {
      $http.defaults.headers.common.Authorization = localStorage.getItem('id_token');
    } else {
      $state.go('login');
    }
  });

require('./routes');
require('./app.component');

require('./auth');
require('./user');

