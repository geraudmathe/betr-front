angular
	.module('betr')
	.controller('betsController', BetsController)

BetsController.$inject = ['Bet'];

function BetsController(Bet) {

	var self = this;

	self.all = [];
	self.bet = {};

	self.getBets = function() {
		self.all = Bet.query();
	}

}