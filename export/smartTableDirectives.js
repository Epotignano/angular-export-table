angular.module('smart-table')
    .directive('stFilteredCollection', function () {
        return {
          restrict: 'A',
          require: '^stTable',
          scope: {
            stFilteredCollection: '='
          },
          controller: 'stTableController',
          link: function (scope, element, attr, ctrl) {

            scope.$watch(function () {
              return ctrl.getFilteredCollection();
            }, function (newValue, oldValue) {
              scope.stFilteredCollection = ctrl.getFilteredCollection();
            });
          }
        };
    })
;
