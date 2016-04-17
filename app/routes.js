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
        controller: ['$scope', function($scope) {
          $scope.year = moment().year();
        }]
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

      .state('capFinPlanning.servicesinvestments', {
        url: '/services/investments',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/services-investments.html');
        }
      })

      .state('capFinPlanning.servicesestate', {
        url: '/services/estate',
        templateProvider: function($templateCache) {
          return $templateCache.get('views/services-estate.html');
        }
      })

    $urlRouterProvider.otherwise('/home');

}]).run(['$rootScope', function($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    $rootScope.$broadcast('navbar:collapse');
  });
}]);