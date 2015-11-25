/**
 * Created by mmasuyama on 9/3/2015.
 */
var teOptionCtrl = function($scope, $element, $attrs) {
  var ctrl = this;
    var elementScope = $element.isolateScope().ctrl;

    $element.on('click', function(e){
        //console.log($scope);
        elementScope.tableExportCtrl.setProperty('exportOptions', elementScope.teParam,elementScope.teValue);
        elementScope.tableExportCtrl.exportTableFn()
    })
};

var linkFn = function($scope, $element, $attrs, dirContrl) {
    var elementScope = $element.isolateScope();
    elementScope.ctrl.tableExportCtrl = dirContrl;

};

angular.module('ceibo.components.table.export')
  .controller('teOptionCtrl', teOptionCtrl)
  .directive('teOption', function(){
      return {
          templateUrl: '',
          require: '^tableExport',
          scope: {
              teParam: '=',
              teValue: '='
          }, //isolate or not
          restrict : 'AC', //A = attribute, C = class, E = Element
          controller: 'teOptionCtrl as ctrl',
          link: linkFn,
          bindToController: true //true or false
      }
  })

;
