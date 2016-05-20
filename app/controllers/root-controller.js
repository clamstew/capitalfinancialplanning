angular.module('capFinPlanning').controller('RootController', [
  '$scope',
  function(
    $scope
  ) {

  $scope.brand = "Capital Financial Planning Group";

  $scope.items = [
    { name: 'Overview', uisref: 'capFinPlanning.servicesoverview' },
    { name: 'Retirement', uisref: 'capFinPlanning.servicesretirement' },
    { name: 'Comprehensive Financial Planning', uisref: 'capFinPlanning.servicescomprehensive' },
    { name: 'Investments', uisref: 'capFinPlanning.servicesinvestments' },
    { name: 'Estate Planning', uisref: 'capFinPlanning.servicesestate' }
  ];

  $scope.navbarCollapsed = true;

  $scope.$on('navbar:collapse', function() {
    $scope.navbarCollapsed = true;
  });

}]);