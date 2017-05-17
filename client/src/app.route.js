config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
    });

    // $urlRouterProvider.otherwise('/home');
}

angular
  .module('app')
  .config(config);