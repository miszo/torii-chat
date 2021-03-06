class AuthService {
  constructor($http, $state) {
    this.http = $http;
    this.state = $state;
    this.headers = {
      headers: { 'Content-Type': 'application/json' }
    }
    this.authToken = null;
  }

  registerUser(userData) {
    const url = 'http://localhost:3000/api/auth/register/';
    return this.http.post(url, userData, this.headers) 
      .then(res => { //TODO: Interceptor HTTP
          localStorage.setItem('id_token', res.data.token);
          this.http.defaults.headers.common.Authorization = res.data.token;
          this.state.go('user');
      })
      .catch(err => console.warn(err));
  }

  authenticateUser(userCredentials) {
    const url = 'http://localhost:3000/api/auth/login/';
    return this.http.post(url, userCredentials, this.headers)
      .then(res => {
        if (res.data && res.data.token) {
          localStorage.setItem('id_token', res.data.token);
          this.http.defaults.headers.common.Authorization = res.data.token;
          this.state.go('user');
        }
      })
      .catch(err => console.warn(err))
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    return this.authToken;
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
    this.state.go('login');
  }


}

angular
  .module('authModule')
  .service('authService', AuthService);