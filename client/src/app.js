angular
  .module('app', ['ui.router'])
  .config(config)
  .component('app', {
    selector: 'app',
    template: `
      <div>
        <nav>
          <a ui-sref="home"> home </a>
        </nav>
        <ui-view></ui-view>
      </div>
     `
  })
  .component('home', {
    selector: 'home',
    template: '<div>home</div>',
    controller: function() {
    }
  });

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
    });

    $urlRouterProvider.otherwise('/home');
}

