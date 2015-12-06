angular
  .module('betr')
  .controller('eventsController', EventsController);

EventsController.$inject = ['Event', '$state', '$firebaseArray'];

function EventsController(Event, $state, $firebaseArray) {

  var _this = this;

  _this.moveToConfirmation = function(current) {
    console.log(current);
    $state.go('confirmation', { current: current });
  };

  _this.saveCurrent = function(current) {
    console.log(current);
    // _this.events.$add(current);
    _this.moveToConfirmation(current);
  };

  _this.all = [];
	_this.current = {};

  function updateEvents(res) {
    _this.all = res;
  };

  _this.getEvents = function() {
    Event.query(true, updateEvents);
  };

  _this.getEvents();
};
