angular
  .module('betr')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwthelper) {
  var _this = this;

  _this.saveToken = function(token) {
    return $window.localStorage.setItem('betr-token', token);
  };

  _this.getToken = function() {
    return $window.localStorage.getItem('betr-token');
  };

  _this.removeToken = function() {
    return $window.localStorage.removeItem('betr-token');
  };

};
