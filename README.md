# angular-export-table
Allow us us to export an HTML table to different types of documents.


### Installation

```
    bower install --save angular-export-table
```

by now, due that is very recent version, if you're using grunt or something else, still you have to add the next files by hand
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


after, add this dependency for your angular module as follows:

```
    angular.module('myApp', ['ceibo.components.table.export']);
```

###Allowed formats

    -JSON
    -XML
    -PNG
    -CSV
    -TXT
    -SQL
    -MS-Word
    -Ms-Excel
    -Ms-Powerpoint
    -PDF

### table-export directive
Can be used as Class, attribute or element.

#### Params

1. table-selector **String** : is a jQuery or JQLite Selector
2. export-options **Object** :
   1. {
        separator: ','
        ignoreColumn: [2,3],
        tableName:'yourTableName'
        type:'csv'
        pdfFontSize:14
        pdfLeftMargin:20
        escape:'true'
        htmlContent:'false'
        consoleLog:'false'
     }


```
<div class="row pull-right">
 <div class="row">
     <button class="table-export" table-selector="'table'" export-options="{type: 'pdf', escape: true, ignoreColumn : '[4]', tableName: 'Aanhefs' }">
         Export
     </button>
 </div>
```

### te-option directive

allow us to define custom templetas as dropdown, when we put this directive in an HTML element, on click it will perform the export, modifying the specified
properties assigned to **te-param** giving the value of **te-value**

####Example


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

###Based on
https://github.com/kayalshri/tableExport.jquery.plugin

