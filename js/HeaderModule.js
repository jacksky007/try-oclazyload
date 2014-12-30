var headerModule = angular.module('HeaderModule', [])

headerModule.directive('header', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    scope: {
      headerName: '@headerName'
    },
    link: function(scope, element, attrs) {
      $rootScope.headerName = 'header'
      scope.headerValue = 'ocLazyLoad'
    }
  }
}])
