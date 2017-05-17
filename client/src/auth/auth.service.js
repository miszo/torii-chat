class AuthService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
  }

  registerUser(userData) {
    const url = 'http://localhost:3000/api/auth/register/';
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    this.$http.post(url, userData) 
      .then(res => {
          localStorage.setItem('id_token', res.data.token);
          this.$http.defaults.headers.common.Authorization = res.data.token;
          this.$state.go('home');
      })
      .catch(err => console.warn(err));
  }

  authenticateUser(userCredentials) {
    const url = 'http://localhost:3000/api/auth/login/';
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    this.$http.post(url, userCredentials)
      .then(res => {
        if (res.data && res.data.token) {
          localStorage.setItem('id_token', res.data.token);
          this.$http.defaults.headers.common.Authorization = res.data.token;
          this.$state.go('home');
        }
      })
      .catch(err => console.warn(err))
  }


}

angular
  .module('authModule')
  .service('authService', AuthService);