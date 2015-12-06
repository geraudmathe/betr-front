angular
	.module('betr')
	.factory('Bet', Bet);

Bet.$inject = ['$resource', 'API'];
function Bet($resource, API) {

	return $resource(
		API + 'bets',
		null,
		{
			'bet' : {
				method: 'POST',
				url: API + 'bets',
			}
		}
	);

}
