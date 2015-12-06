angular
  .module('betr')
  .controller('UsersController', UsersController);

UsersController.$inject = ['User', 'TicketService', '$state'];
function UsersController(User, TicketService, $state) {
  var _this = this;
  _this.firstName = ' there!';

  function handleAuth(res) {
    _this.firstName = res.firstName;
    _this.getBalance();
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
    if (_this.isLoggedIn()) {
      $state.go('swipe');
    };
  };

  _this.placeBet = function(amount) {
    _this.betAmount = amount;
  };

  _this.confirmBet = function(amount, id, priceNum, priceDen) {
    // place the bet with will
    console.log('Amount ' + amount + '. Bet ID: ' + betId + ' num: ' + num + ' den: ' + den);

    Event.bet(amount, betId, num, den, function() {
      console.log('Bet placed sucessfully');
    });
  };

  if (_this.isLoggedIn()) {
    var data = JSON.parse(window.localStorage.getItem('betr-user-data'));
    _this.firstName = data.firstName;
  };

  return _this;
};
