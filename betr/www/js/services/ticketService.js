angular
  .module('betr')
  .service('TicketService', TicketService);

TicketService.$inject = ['$window', 'jwtHelper'];
function TicketService($window, jwthelper) {
  var _this = this;

  _this.saveTicket = function(ticket) {
    return $window.localStorage.setItem('betr-ticket', ticket);
  };

  _this.getTicket = function() {
    return $window.localStorage.getItem('betr-ticket');
  };

  _this.removeTicket = function() {
    return $window.localStorage.removeItem('betr-ticket');
  };

};
