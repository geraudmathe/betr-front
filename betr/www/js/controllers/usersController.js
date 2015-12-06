angular
  .module('betr')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TicketService', '$state'];
function UsersController(User, TicketService, $state) {
  var _this = this;
  _this.firstName = ' there!';

  function handleAuth(res) {
    _this.firstName = res.firstName;
  };

  function handleBalance(res) {
    _this.balance = res.balance;
  };

  _this.authorize = function() {
    User.authorize(_this.user, handleAuth);
  };

  _this.logout = function() {
    TicketService.removeTicket();
    _this.user = {};
  };

  _this.getBalance = function() {
    User.balance(true, handleBalance);
  };

  _this.isLoggedIn = function() {
    return !!TicketService.getTicket();
  };

  _this.showingBalance = function() {
    return !!_this.balance;
  };

  _this.moveToSwipe = function() {
    $state.go('swipe');
  };

  if (_this.isLoggedIn()) {
    var data = JSON.parse(window.localStorage.getItem('betr-user-data'));
    _this.firstName = data.firstName;
  };

  return _this;
};
