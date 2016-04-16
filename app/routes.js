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
        }
      })

      .state('capFinPlanning.servicesretirement', {
        url: '/services/retirement',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/services-retirement.html');
        }
      })

      .state('capFinPlanning.servicescomprehensive', {
        url: '/services/comprehensive-financial-planning',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/services-comprehensive.html');
        }
      })


    $urlRouterProvider.otherwise('/home');

}]);