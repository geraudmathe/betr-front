angular
    .module('betr', ['gajus.swing'])
    .controller('cardsController', CardController) 
 
CardController.$inject = ['Card']
function CardController(){

    var card = this;

    card.throwout = function (eventName, eventObject) {
        console.log('throwout', eventObject);
    };

    card.throwoutleft = function (eventName, eventObject) {
        console.log('throwoutleft', eventObject);
    };

    card.throwoutright = function (eventName, eventObject) {
        console.log('throwoutright', eventObject);
    };

    card.throwin = function (eventName, eventObject) {
        console.log('throwin', eventObject);
    };

    card.dragstart = function (eventName, eventObject) {
        console.log('dragstart', eventObject);
    };

    card.dragmove = function (eventName, eventObject) {
        console.log('dragmove', eventObject);
    };

    card.dragend = function (eventName, eventObject) {
        console.log('dragend', eventObject);
    };

    card.options = {
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


