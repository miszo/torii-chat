class UserCtrl {
  constructor() {
    console.log('UserCtrl is up!');
  }
}

angular
  .module('userModule')
  .component('userComponent', {
    selector: 'user',
    template: require('./user.component.html'),
    controller: UserCtrl
  });