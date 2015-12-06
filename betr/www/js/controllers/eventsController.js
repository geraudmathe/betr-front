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
	_this.singleEvent = {};

	_this.getEvents = function() {
		var ticket = TicketService.getTicket();
		_this.all = Event.query();
		console.log(_this.all);
	}

  var cardTypes = [
    { image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' }
  ];

  _this.cards = Array.prototype.slice.call(cardTypes, 0);

  _this.cardDestroyed = function(index) {
    _this.cards.splice(index, 1);
  };

  _this.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    _this.cards.push(angular.extend({}, newCard));
  }

  _this.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    _this.addCard();
  };
  _this.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    _this.addCard();
  };

}