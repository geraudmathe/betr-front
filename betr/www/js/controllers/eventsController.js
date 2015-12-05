angular
	.module('betr', ['gajus.swing'])
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

	_this.throwout = function (eventName, eventObject) {
	    console.log('throwout', eventObject);
	};

	_this.throwoutleft = function (eventName, eventObject) {
	    console.log('throwoutleft', eventObject);
	};

	_this.throwoutright = function (eventName, eventObject) {
	    console.log('throwoutright', eventObject);
	};

	_this.throwin = function (eventName, eventObject) {
	    console.log('throwin', eventObject);
	};

	_this.dragstart = function (eventName, eventObject) {
	    console.log('dragstart', eventObject);
	};

	_this.dragmove = function (eventName, eventObject) {
	    console.log('dragmove', eventObject);
	};

	_this.dragend = function (eventName, eventObject) {
	    console.log('dragend', eventObject);
	};

	_this.options = {
	    throwOutConfidence: function (offset, elementWidth) {
	        console.log('throwOutConfidence', offset, elementWidth);
	        return Math.min(Math.abs(offset) / elementWidth, 1);
	    },
	    isThrowOut: function (offset, elementWidth, throwOutConfidence) {
	        console.log('isThrowOut', offset, elementWidth, throwOutConfidence);
	        return throwOutConfidence === 1;
	    }
	};

}