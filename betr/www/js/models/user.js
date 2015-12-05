angular
  .module('betr')
  .factory('User', User);

User.$inect = ['$resource', 'API'];
function User($resource, API) {

  return $resource(
    API + 'session',
    null,
    {
      'authorize': {
        url: API + 'session',
        method: 'POST',
      }
    }
  );
};
