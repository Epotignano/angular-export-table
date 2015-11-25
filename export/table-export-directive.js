/**
 * Created by mmasuyama on 9/2/2015.
 */

var tableExportCtrl = function($element, $attrs, $document) {
  var ctrl = this;

    var elementScope = $element.isolateScope();

    ctrl.disableClick = $element[0].innerHTML.match("te-option");

    var defaultOptions = {
        type: 'pdf',
        escape: false,
        tableName: 'table'
    };

    function exportTable() {
        ctrl.tableElement.tableExport({
            type: elementScope.ctrl.exportOptions.type || defaultOptions.type,
            escape: elementScope.ctrl.exportOptions.escape || defaultOptions.escape,
            tableName: elementScope.ctrl.exportOptions.tableName || defaultOptions.tableName
        })
    }

    function setProperty (obj, param, value) {
        Object.defineProperty(ctrl[obj], param, {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
        })
    }


    if(elementScope.ctrl.tableSelector) {
        ctrl.tableElement = $('#'+elementScope.ctrl.tableSelector);
        //ctrl.tableElement = document.getElementById(elementScope.ctrl.tableSelector).value;
    }

    //TODO allow to define diiferents methods
    $element.on('click', function(e){
        if(!ctrl.disableClick){
            exportTable();
        }
    });

    //TODO allow to define differents tags (button, select, input, etc)


    //exports

    angular.extend(ctrl,{
        defaultOptions : defaultOptions,
        exportTableFn : exportTable,
        setProperty : setProperty
    })
};

var compileExportTable = function($element, $attrs, transcludeFn) {

};

angular.module('ceibo.components.table.export', [])
  .controller('tableExportCtrl', tableExportCtrl)
  .directive('tableExport', function(){
      return {
          //require: 'table',
          scope: {
              /**
               * options : {
               *     formats : {
               *        pdf: //boolean,
               *        xls: //boolean
               *     }
               * }
               *
               *
               **/
              exportOptions: '=',
              /*
                selector : { selectorType: selector }
               */

              tableSelector: '=' //selector that this element is refering refers.

          }, //isolate or not
          restrict : 'AEC', //A = attribute, C = class, E = Element
          controller: 'tableExportCtrl as ctrl',
          compile: compileExportTable,
          bindToController: true //true or false
      }
  })

;
