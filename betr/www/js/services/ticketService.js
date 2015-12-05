angular
  .module('betr')
  .service('TicketService', TicketService);

TicketService.$inject = ['$window', 'jwtHelper'];
function TicketService($window, jwthelper) {
  var _this = this;

  _this.saveTicket = function(data) {
    $window.localStorage.setItem('betr-user-data', JSON.stringify(data));
    return $window.localStorage.setItem('betr-ticket', data.ticket);
  };

  _this.getTicket = function() {
    return $window.localStorage.getItem('betr-ticket');
  };

  _this.removeTicket = function() {
    return $window.localStorage.removeItem('betr-ticket');
  };

};
