angular
  .module('betr')
  .factory('Card', Card);


  function Card() {
    var cards = [
            {name: 'clubs', symbol: '♣'},
            {name: 'diamonds', symbol: '♦'},
            {name: 'hearts', symbol: '♥'},
            {name: 'spades', symbol: '♠'}
        ];

    return cards

}