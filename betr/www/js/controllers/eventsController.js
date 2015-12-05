angular
	.module('betr')
	.controller('eventsController', EventsController);

EventsController.$inject = ['Event', 'TicketService'];

function EventsController(Event, TicketService) {

	var _this = this;

	_this.all = [];
	_this.singleEvent = {};

	_this.getEvents = function() {
		var ticket = TicketService.getTicket();
		_this.all = Event.query();
		console.log(_this.all);
	}

}