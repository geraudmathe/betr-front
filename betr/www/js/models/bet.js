angular
	.module('betr')
	.factory('Bet', Bet);

Bet.$inject = ['$resource', 'API'];

function Bet($resource, API) {

	return $resource(API, null, {
		'query' : { method: 'GET', isArray: false }
	});

}