angular
	.module('betr')
	.factory('Event', Event);

Event.$inject = ['$resource', 'API'];

function Event($resource, API) {

	return $resource(
		API + 'events',
		null,
		{
			'query' : {
				method: 'GET',
				isArray: true,
			}
		}
	);

}
