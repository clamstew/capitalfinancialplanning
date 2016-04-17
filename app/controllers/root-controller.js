angular.module('capFinPlanning').controller('RootController', [
  '$scope',
  function(
    $scope
  ) {

  $scope.brand = "Capital Financial Planning";

  $scope.items = [
    { name: 'Retirement', uisref: 'capFinPlanning.servicesretirement' },
    { name: 'Comprehensive Financial Planning', uisref: 'capFinPlanning.servicescomprehensive' },
    { name: 'Investments', uisref: 'capFinPlanning.servicesinvestments' },
    { name: 'Estate Planning', uisref: 'capFinPlanning.servicesestate' }
  ]

}]);