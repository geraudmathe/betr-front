angular
  .module('betr')
  .factory('authInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request: function(config) {
      var token = TokenService.getToken();

      if (config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = 'Bearer ' + token;
      };

      return config;
    },

    response: function(res) {
      if (res.config.url.indexOf(API) === 0 && res.data.ticket) {
        TokenService.saveToken(res.data.ticket);
      };

      return res;
    },
  };
};
