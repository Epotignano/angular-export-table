# angular-export-table
Allow us us to export an HTML table to different types of documents.

### Way of use

#### As dropdown

```
<div class="row pull-right">
 <div class="row">
     <button class="table-export" table-selector="'table'" export-options="{type: 'pdf', escape: true, ignoreColumn : '[4]', tableName: 'Aanhefs' }">
         Export
     </button>
 </div>
```

### table-export directive
Can be used as Class, attribute or element.

#### Params

1. table-selector **String** : is a jQuery or JQLite Selector
2. export-options **Object** :
   1.separator: ','
     ignoreColumn: [2,3],
     tableName:'yourTableName'
     type:'csv'
     pdfFontSize:14
     pdfLeftMargin:20
     escape:'true'
     htmlContent:'false'
     consoleLog:'false'

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

