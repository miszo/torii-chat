class AppCtrl {
  constructor() {
    console.log('App component created!');
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
    template: '<div>home</div>',
  });


