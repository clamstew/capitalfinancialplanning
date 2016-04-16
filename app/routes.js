angular.module('capFinPlanning').config([
  '$stateProvider',
  '$urlRouterProvider',
  function(
    $stateProvider,
    $urlRouterProvider
  ) {

    var ghPagesRoot = '/capitalfinancialplanning';

    $stateProvider
      .state('capFinPlanning', {
        'abstract': true,
        url: '',
        templateUrl: ghPagesRoot+'/app/views/root.html',
        controller: 'RootController'
      })

      .state('capFinPlanning.home', {
        url: '/home',
        templateUrl: ghPagesRoot+'/app/views/home.html',
        controller: 'HomeController'
      })

      .state('capFinPlanning.resume', {
        url: '/resume',
        templateUrl: ghPagesRoot+'/app/views/resume.html',
        controller: 'ResumeController'
      })


    $urlRouterProvider.otherwise('/home');

}]);