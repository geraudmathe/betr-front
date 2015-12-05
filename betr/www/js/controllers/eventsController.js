angular
	.module('betr')
	.controller('eventsController', EventsController);

EventsController.$inject = ['Bet'];
function EventsController(Bet) {
	var _this = this;
	_this.all = [];
	_this.bet = {};

	_this.getEvents = function() {
		_this.all = Bet.query();
	};
};
