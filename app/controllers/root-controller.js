angular.module('capFinPlanning').controller('RootController', [
  '$scope',
  function(
    $scope
  ) {

  $scope.brand = "Capital Financial Planning";

  $scope.items = [
    'one',
    'thow'
  ]

}]);