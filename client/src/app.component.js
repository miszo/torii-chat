class AppCtrl {
  constructor() {
    console.log('App component created!');
  }
}

angular
  .module('app')
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
    controller: AppCtrl
  });


