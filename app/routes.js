angular.module('capFinPlanning').config([
  '$stateProvider',
  '$urlRouterProvider',
  function(
    $stateProvider,
    $urlRouterProvider
  ) {

    $stateProvider
      .state('capFinPlanning', {
        'abstract': true,
        url: '',
        templateUrl: '/app/views/root.html',
        controller: 'RootController'
      })

      .state('capFinPlanning.home', {
        url: '/home',
        templateUrl: '/app/views/home.html',
        controller: 'HomeController'
      })

      .state('capFinPlanning.resume', {
        url: '/resume',
        templateUrl: '/app/views/resume.html',
        controller: 'ResumeController'
      })


    $urlRouterProvider.otherwise('/home');

}]);