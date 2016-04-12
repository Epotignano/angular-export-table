# angular-export-table
Allows you to export an HTML table to different types of document formats:

    -CSV
    -PDF
    -JSON
    -XML
    -PNG
    -TXT
    -SQL
    -MS Word
    -MS Excel
    -MS Powerpoint


It is driven by Tableexport.jquery.plugin.


### Installation

```
    bower install --save angular-export-table
```

This is a very recent version so if you're using grunt or something else, you must add the following JavaScript files by hand.

*I will solve it asap*

```
    <script src="angular-export-table/export/tableExportDirective.js"></script>
    <script src="angular-export-table/export/tableExportOptionDirective.js"></script>
    <script src="angular-export-table/export/smartTableDirectives.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/tableExport.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/jquery.base64.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/html2canvas.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/jspdf/jspdf.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/jspdf/libs/base64.js"></script>
    <script src="angular-export-table/kayalshri-tableExport.jquery.plugin-a891806/jspdf/libs/sprintf.js"></script>

```
### Usage
To use the module, add it to your angular application as follows:

```
    angular.module('myApp', ['ceibo.components.table.export']);
```
Insert the directive `table-export` into the element that will be used to trigger the export, usually a button.

Use the directive `table-selector` to identify the table to be exported, and `export-options` to set the parameters used by the export:

```
<div class="row">
   <button class="table-export" table-selector="'myTableToExport'" export-options="{type: 'pdf', tableName: 'myExportedTable' }">Export</button>
</div>
```
where 'myTableToExport' is the name of the JQuery or JQLite selector on the table to be exported, for example `<table id="myTableToExport" class="table table-striped table-bordered">`, and 'myExportedTable' is the name of the exported file.


The `table-export` directive can be used as a class, attribute or element.

#### Export options

The options for the export are as follows:
```
separator: ','
ignoreColumn: [2,3],
tableName:'myExportedTable'
type:'csv'
pdfFontSize:14
pdfLeftMargin:20
escape:'true'
htmlContent:'false'
consoleLog:'false'
```

### Directive `te-option`

Allows you to modify the `export-options` by selecting the properties to be modified from a dropdown list.

When the element is clicked, it will modify the property specified by `te-param` giving it the value of `te-value`.

#### Example

```
<div class="row pull-right">
 <div class="dropdown">
     <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
         <i class=""></i>Export table to...
         <span class="caret"></span>
     </button>
     <ul class="table-export dropdown-menu" table-selector="'table'" export-options="{type: 'pdf', escape: true, ignoreColumn : '[4]', tableName: 'Aanhefs' }" aria-labelledby="dropdownMenu1">
         <li te-option te-value="'pdf'" te-param="'type'">
             <a href="#">PDF</a>
         </li>

         <li te-option te-value="'excel'" te-param="'type'">
             <a href="#">Excel</a>
         </li>

         <li te-option te-value="'csv'" te-param="'type'">
             <a href="#">CSV</a>
         </li>
     </ul>
 </div>
</div>
```

### Based on
https://github.com/kayalshri/tableExport.jquery.plugin
