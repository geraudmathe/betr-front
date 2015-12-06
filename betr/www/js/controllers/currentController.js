angular
  .module('betr')
  .controller('currentController', CurrentController);

CurrentController.$inject = ['$stateParams']
function CurrentController($stateParams) {
  var _this = this;
  console.log($stateParams);
  _this.current = $stateParams.current;
};
