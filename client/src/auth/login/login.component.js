class LoginCtrl {
  constructor(authService) {
    this.authService = authService;
    this.userCredentials = {};
  }

  login() {
    if ( !this.userCredentials.username ||
         !this.userCredentials.password ) {
      return;
    }
    this.authService.authenticateUser(this.userCredentials);
  }

}

angular
  .module('authModule')
  .component('loginComponent', {
    selector: 'login-component',
    template: require('./login.component.html'),
    controller: LoginCtrl
  });