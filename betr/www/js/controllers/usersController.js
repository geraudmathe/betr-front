angular
  .module('betr')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TicketService'];
function UsersController(User, TicketService) {
  var _this = this;

  function handleAuth(res) {
    var ticket = res.ticket? res.ticket : null;
    _this.firstName = res.firstName ? res.firstName : 'there!';
  };

  _this.authorize = function() {
    User.authorize(_this.user, handleAuth);
  };

  _this.logout = function() {
    TicketService.removeTicket();
    _this.user = {};
  };

  _this.isLoggedIn = function() {
    return !!TicketService.getTicket();
  };

  return _this;
};
