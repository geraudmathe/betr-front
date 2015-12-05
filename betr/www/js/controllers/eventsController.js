angular
	.module('betr')
	.controller('eventsController', EventsController);

EventsController.$inject = ['Event', 'TicketService'];

function EventsController(Event) {

	var _this = this;

	_this.all = [];
	_this.singleEvent = {};
	_this.token = {};

	_this.getEvents = function() {
		_this.ticket = TicketService.getTicket();
		_this.all = Event.query();
		console.log(_this.all);
	}

}