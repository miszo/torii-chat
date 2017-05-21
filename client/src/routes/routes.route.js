routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {
  console.log('Routing is ready');
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent'
    })
    .state('register', {
      url: '/register',
      component: 'registerComponent'
    })
    .state('home', {
      url: '/home',
      component: 'homeComponent',
    })
    .state('user', {
      url: '/user',
      component: 'userComponent'
    })
    .state('chat', {
      url: '/chat',
      component: 'chatComponent'
    });

    $urlRouterProvider.otherwise('/home');

}

angular
  .module('routesModule')
  .config(routesConfig);