webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
  function AuthService($http, $state) {
    _classCallCheck(this, AuthService);

    this.$http = $http;
    this.$state = $state;
  }

  _createClass(AuthService, [{
    key: 'registerUser',
    value: function registerUser(userData) {
      var _this = this;

      var url = 'http://localhost:3000/api/auth/register/';
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.$http.post(url, userData).then(function (res) {
        localStorage.setItem('id_token', res.data.token);
        _this.$http.defaults.headers.common.Authorization = res.data.token;
        _this.$state.go('home');
      }).catch(function (err) {
        return console.warn(err);
      });
    }
  }, {
    key: 'authenticateUser',
    value: function authenticateUser(userCredentials) {
      var _this2 = this;

      var url = 'http://localhost:3000/api/auth/login/';
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.$http.post(url, userCredentials).then(function (res) {
        if (res.data && res.data.token) {
          localStorage.setItem('id_token', res.data.token);
          _this2.$http.defaults.headers.common.Authorization = res.data.token;
          _this2.$state.go('home');
        }
      }).catch(function (err) {
        return console.warn(err);
      });
    }
  }]);

  return AuthService;
}();

angular.module('authModule').service('authService', AuthService);

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = __webpack_require__(102);

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginCtrl = function () {
  function LoginCtrl(authService) {
    _classCallCheck(this, LoginCtrl);

    this.authService = authService;
    this.userCredentials = {};
  }

  _createClass(LoginCtrl, [{
    key: 'login',
    value: function login() {
      if (!this.userCredentials.username || !this.userCredentials.password) {
        return;
      }
      this.authService.authenticateUser(this.userCredentials);
    }
  }]);

  return LoginCtrl;
}();

angular.module('authModule').component('loginComponent', {
  selector: 'loginComponent',
  template: __webpack_require__(106),
  controller: LoginCtrl
});

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _register = __webpack_require__(104);

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegisterCtrl = function () {
  function RegisterCtrl(authService) {
    _classCallCheck(this, RegisterCtrl);

    this.authService = authService;
    this.userData = {};
  }

  _createClass(RegisterCtrl, [{
    key: 'register',
    value: function register() {
      if (!this.userData.username || !this.userData.email || !this.userData.firstName || !this.userData.lastName || !this.userData.password) {
        return;
      }
      this.authService.registerUser(this.userData);
    }
  }]);

  return RegisterCtrl;
}();

angular.module('authModule').component('registerComponent', {
  selector: 'registerComponent',
  template: __webpack_require__(107),
  controller: RegisterCtrl
});

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<div> <form ng-submit=$ctrl.login()> <label> username: <input type=text ng-model=$ctrl.userCredentials.username> </label> <br> <label> password: <input type=password ng-model=$ctrl.userCredentials.password> </label> <br> <button type=submit>Login</button> </form> <span>Don't have an account? <a ui-sref=register>Register</a></span> </div> ";

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = "<div> <form ng-submit=$ctrl.register()> <label> username: <input type=text ng-model=$ctrl.userData.username> </label> <br> <label> e-mail: <input type=email ng-model=$ctrl.userData.email> </label> <br> <label> first name: <input type=text ng-model=$ctrl.userData.firstName> </label> <br> <label> last name: <input type=text ng-model=$ctrl.userData.lastName> </label> <br> <label> password: <input type=password ng-model=$ctrl.userData.password> </label> <br> <button type=submit>Register</button> </form> <span>Already a user? <a ui-sref=login>Login</a></span> </div>";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppCtrl = function AppCtrl() {
  _classCallCheck(this, AppCtrl);

  console.log('App component created!');
};

angular.module('app').component('app', {
  selector: 'app',
  template: '\n      <div>\n        <nav>\n          <a ui-sref="home"> home </a>\n        </nav>\n        <ui-view></ui-view>\n      </div>\n     '
}).component('home', {
  selector: 'home',
  template: '<div>home</div>',
  controller: AppCtrl
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    component: 'home'
  });

  // $urlRouterProvider.otherwise('/home');
}

angular.module('app').config(config);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = __webpack_require__(98);

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _auth2 = __webpack_require__(100);

Object.keys(_auth2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth2[key];
    }
  });
});

var _auth3 = __webpack_require__(99);

Object.keys(_auth3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth3[key];
    }
  });
});

var _login = __webpack_require__(101);

Object.keys(_login).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _login[key];
    }
  });
});

var _register = __webpack_require__(103);

Object.keys(_register).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _register[key];
    }
  });
});

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('app', ['ui.router', 'ngMaterial', 'authModule']);

__webpack_require__(61);
__webpack_require__(60);

__webpack_require__(62);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('authModule', []);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url: '/login',
    component: 'loginComponent'
  }).state('register', {
    url: '/register',
    component: 'registerComponent'
  });

  $urlRouterProvider.otherwise('/login');
}

angular.module('authModule').config(config);

/***/ })

},[97]);