angular
	.module('betr')
	.controller('eventsController', EventsController);
	// .directive('noScroll', function($document) {

	//   return {
	//     restrict: 'A',
	//     link: function($scope, $element, $attr) {

	//       $document.on('touchmove', function(e) {
	//         e.preventDefault();
	//       });
	//     }
	//   }
	// });

EventsController.$inject = ['Event', 'TicketService'];

function EventsController(Event, TicketService, TDCardDelegate) {

	var _this = this;

	_this.all = [];

	_this.getEvents = function() {
		var ticket = TicketService.getTicket();
		_this.all = Event.query();
		console.log(_this.all);
	}

}