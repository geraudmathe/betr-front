angular
  .module('betr')
  .factory('authInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TicketService'];
function AuthInterceptor(API, TicketService) {
  return {
    request: function(config) {
      var ticket = TicketService.getTicket();

      if (config.url.indexOf(API) === 0 && ticket) {
        config.headers.Authorization = 'Bearer ' + ticket;
      };

      return config;
    },

    response: function(res) {
      if (res.config.url.indexOf(API) === 0 && res.data.ticket) {
        TicketService.saveTicket(res.data.ticket);
      };

      return res;
    },
  };
};
