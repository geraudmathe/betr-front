angular
  .module('betr')
  .controller('currentController', CurrentController);

CurrentController.$inject = ['$stateParams'];
function CurrentController($stateParams) {
  var _this = this;
  _this.current = $stateParams.current;

  _this.i = 20;
  (function loop(i) {
    setTimeout(function() {
      _this.timeRemaining = i;
      i--;
      i > 0 ? loop(i) : i = 20;
      loop(i);
    }, 1000);
  })(0);

};
