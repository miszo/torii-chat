config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent'
    })
    .state('register', {
      url: '/register',
      component: 'registerComponent'
    });

    $urlRouterProvider.otherwise('/login');
}

angular
  .module('authModule')
  .config(config);