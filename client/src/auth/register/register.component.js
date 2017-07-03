class RegisterCtrl {
  constructor(authService) {
    this.authService = authService;
    this.userData = {};
  }

  register() { //TODO: Walidacja z angularowego formularza
    if ( !this.userData.username ||
         !this.userData.email ||
         !this.userData.firstName ||
         !this.userData.lastName ||
         !this.userData.password) {
      return;
    }
    this.authService.registerUser(this.userData);
  }

}

angular
  .module('authModule')
  .component('registerComponent', {
    selector: 'register-component',
    template: require('./register.component.html'),
    controller: RegisterCtrl
  });