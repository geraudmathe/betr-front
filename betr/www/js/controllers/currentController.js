angular
  .module('betr')
  .controller('currentController', CurrentController);

CurrentController.$inject = ['$stateParams'];
function CurrentController($stateParams) {
  var _this = this;
  _this.current = $stateParams.current;

};
