angular.module('capFinPlanning').config([
  '$stateProvider',
  //'$templateCache',
  '$urlRouterProvider',
  function(
    $stateProvider,
    //$templateCache,
    $urlRouterProvider
  ) {

    var ghPagesRoot = '';

    $stateProvider
      .state('capFinPlanning', {
        'abstract': true,
        url: '',
        templateProvider: function($templateCache){
          return $templateCache.get('views/root.html');
        },
        controller: 'RootController'
      })

      .state('capFinPlanning.home', {
        url: '/home',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/home.html');
        },
        controller: 'HomeController'
      })

      .state('capFinPlanning.resume', {
        url: '/resume',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/resume.html');
        },
        // templateUrl: '/app/views/resume.html',
        // controller: 'ResumeController'
      })


    $urlRouterProvider.otherwise('/home');

}]);