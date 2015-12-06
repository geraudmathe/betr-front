angular
  .module('betr')
  .controller('eventsController', EventsController);

EventsController.$inject = ['Event', '$state', '$firebaseArray'];

function EventsController(Event, $state, $firebaseArray) {

  var _this = this;

  _this.moveToConfirmation = function(current) {
    $state.go('confirmation', { current: current });
  };

  _this.saveCurrent = function(current) {
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
  // 
  // _this.loop = function(i) {
  //   setTimeout(function() {
  //     _this.timeRemaining = i;
  //     i--;
  //     i > 0 ? _this.loop(i) : i = 20;
  //     _this.loop(i);
  //   }, 1000);
  // };
  //
  // _this.loop(20);
  _this.getEvents();
};
