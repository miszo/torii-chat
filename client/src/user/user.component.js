class UserCtrl {
  constructor(userService) {
    this.userService = userService;

    this.user = {}
  }

  $onInit() {
    this.userService.getUserData()
      .then(user => this.user = user);
  }
}

angular
  .module('userModule')
  .component('userComponent', {
    selector: 'user-component',
    template: require('./user.component.html'),
    controller: UserCtrl
  });