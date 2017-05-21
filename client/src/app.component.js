import './app.component.scss';

class AppCtrl {
  constructor(authService) {
    this.authService = authService;
  }

  logout() {
    this.authService.logout();
  }
}

angular
  .module('app')
  .component('app', {
    selector: 'app',
    template: require('./app.component.html'),
    controller: AppCtrl
  })
  .component('homeComponent', {
    selector: 'home',
    template: '<div layout-padding>Home page</div>',
  });

