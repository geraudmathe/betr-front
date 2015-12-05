angular
	.module('betr')
	.controller('eventsController', EventsController)

EventsController.$inject = ['Event'];

function EventsController(Event) {

	var self = this;

	self.all = [];
	self.singleEvent = {};
	self.token = {};

	self.getEvents = function() {
		self.token = TokenService.getToken();
		self.all = Event.query(self.token);
		console.log(self.all);
	}

}