angular
	.module('betr')
	.controller('eventsController', EventsController)

EventsController.$inject = ['Bet'];

function EventsController(Bet) {

	var self = this;

	self.all = [];
	self.bet = {};

	self.getEvents = function() {
		self.all = Bet.query();
	}

}
