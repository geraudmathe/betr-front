angular
  .module('betr')
  .controller('eventsController', EventsController);

EventsController.$inject = ['Event', 'TicketService'];

function EventsController(Event, TicketService) {
  var _this = this;
  _this.all = [];
  _this.index = 0;
	_this.currentEvent = {};

  function updateCurrentEvent(res) {
    console.log(res);
    _this.all = res;
    _this.currentEvent = _this.all[_this.index];

    // console.log(_this.currentEvent);
  };

  _this.getEvents = function() {
    Event.query(true, updateCurrentEvent);
  };

  _this.events = [
		{image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'},
		{image: 'https://pbs.twimg.com/profile_images/663437842417360896/bryFPXSy.jpg'},
		{image: 'https://pbs.twimg.com/profile_images/672036189273120768/4_Esv2H4.jpg'},
	];

  _this.cards = Array.prototype.slice.call(_this.events, 0);

  _this.cardDestroyed = function(index) {
    _this.cards.splice(index, 1);
  };

  _this.addCard = function() {
    _this.cards.push(angular.extend({}, newCard));
  };

  _this.cardSwipedLeft = function(index) {
    _this.index += 1;
    _this.currentEvent = _this.all[_this.index];
    _this.addCard();
  };

  _this.cardSwipedRight = function(index) {
    _this.addCard();
  };

  _this.getEvents();
};
