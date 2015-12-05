angular
  .module('betr')
  .controlelr('UsersController', UsersController);

UsersController.$inject = ['User', 'TokenService'];
function UsersController(User, TokenService) {
  var _this = this;
  _this.user = {};

  function handleAuth(res) {
    var token = res.token? res.token : null;

    if (token) {
      _this.user = TokenService.decodeToken();
    };
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

  if (_this.isLoggedIn()) {
    _this.user = TokenService.decodeToken();
  };

  return _this;
};
