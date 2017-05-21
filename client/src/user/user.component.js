class UserCtrl {
  constructor(userService) {
    console.log('UserCtrl is up!');
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
    selector: 'userComponent',
    template: require('./user.component.html'),
    controller: UserCtrl
  });