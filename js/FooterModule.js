var FooterModule = angular.module('FooterModule', [])

FooterModule.directive('footer', function() {
  return {
    restrict: 'E',
    scope: true,
    compile: function(element, attrs) {
      return function(scope, element, attrs) {
        scope.footerName = 'footer'
        scope.footerValue = 'hello ocLazyLoad'
      }
    }
  }
})
