angular
  .module('betr')
  .factory('User', User);

User.$inject = ['$resource', 'API'];
function User($resource, API) {

  return $resource(
    API + 'session',
    {},
    {
      'authorize': {
        url: API + 'session',
        method: 'POST',
      },
      'balance': {
        url: API + 'balance',
        method: 'GET',
      }
    }
  );
};
