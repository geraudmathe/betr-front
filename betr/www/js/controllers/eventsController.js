angular
  .module('betr')
  .controller('eventsController', EventsController);

EventsController.$inject = ['Event', 'TicketService', '$state'];

function EventsController(Event, TicketService, $state) {
  var _this = this;
  _this.all = [];
	_this.current = {};

  function updateEvents(res) {
    _this.all = res;

    // console.log(_this.currentEvent);
  };

  _this.getEvents = function() {
    Event.query(true, updateEvents);
  };

  _this.moveToConfirmation = function(current) {
		
    _this.current = current.toJSON();
    $state.go('confirmation');
  };

  _this.getEvents();
};
