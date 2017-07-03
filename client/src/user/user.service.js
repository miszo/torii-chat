class UserService {
  constructor($http, authService) {
    this.http = $http;
    this.authService = authService
  }

  getUserData() {
    const url = 'http://localhost:3000/api/user/';
    const headers = new Headers();
    const token = this.authService.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(url)
      .then(res => res.data.user )
      .catch(err => console.warn(err));
  }
}

angular
  .module('userModule')
  .service('userService', UserService);