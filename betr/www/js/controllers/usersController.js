angular
  .module('betr')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TokenService'];
function UsersController(User, TokenService) {
  var _this = this;
  _this.user = {};

  function handleAuth(res) {
    var token = res.ticket? res.ticket : null;
    _this.firstName = res.firstName ? res.firstName : "there!";
  };

  _this.authorize = function() {
    User.authorize(_this.user, handleAuth);
  };

  _this.logout = function() {
    TokenService.removeToken();
    _this.user = {};
  };

  _this.isLoggedIn = function() {
    return !!TokenService.getToken();
  };

  return _this;
};
