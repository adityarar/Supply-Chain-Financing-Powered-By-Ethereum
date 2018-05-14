
  var myList = [{
"procUnit": "NYC",
"supplierRef": 112233,
"supplierKYC": true,
"buyerRef": 332211,
"buyerKYC": true,
"invoiceRef": 123456,
"createDate": "05/13/2017",
"maturityDate": "08/13/2017",
"amount": 50000,
"status": "R",
"discount": 0.9
}, {
"procUnit": "NYC",
"supplierRef": 223344,
"supplierKYC": true,
"buyerRef": 443322,
"buyerKYC": true,
"invoiceRef": 234567,
"createDate": "05/13/2017",
"maturityDate": "06/13/2017",
"amount": 20000,
"status": "R",
"discount": 0.7
}, {
"procUnit": "NYC",
"supplierRef": 334455,
"supplierKYC": true,
"buyerRef": 554433,
"buyerKYC": true,
"invoiceRef": 345678,
"createDate": "05/13/2017",
"maturityDate": "07/13/2017",
"amount": 30000,
"status": "R",
"discount": 0.6
}, {
"procUnit": "NYC",
"supplierRef": 225344,
"supplierKYC": true,
"buyerRef": 445522,
"buyerKYC": true,
"invoiceRef": 232567,
"createDate": "06/13/2017",
"maturityDate": "07/13/2017",
"amount": 30000,
"status": "R",
"discount": 0.8
}];

   // Builds the HTML Table out of myList.
   function buildHtmlTable(selector) {
     var columns = addAllColumnHeaders(myList, selector);

     for (var i = 0; i < myList.length; i++) {
       var row$ = $('<tr/>');
       for (var colIndex = 0; colIndex < columns.length; colIndex++) {
         var cellValue = myList[i][columns[colIndex]];
         if (cellValue == null) cellValue = "";
         row$.append($('<td/>').html(cellValue));
       }
      //  row$.append($('<td/>').html('<button class="btn btn-success">Accept</button>'));
      //  row$.append($('<td/>').html('<button class="btn btn-danger">Reject</button>'));
      //  row$.addClass('animated fadeInDown');
       $(selector).append(row$);
     }
   }

   // Adds a header row to the table and returns the set of columns.
   // Need to do union of keys from all records as some records may not contain
   // all records.
   function addAllColumnHeaders(myList, selector) {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
     //headerTr$.addClass('animated fadeInDown');

     for (var i = 0; i < myList.length; i++) {
       var rowHash = myList[i];
       for (var key in rowHash) {
         if ($.inArray(key, columnSet) == -1) {
           columnSet.push(key);
           headerTr$.append($('<th/>').html(key));
         }
       }
     }
     //headerTr$.append($('<th/>').html("Options Available").attr('colspan', 2).attr('align', 'right'));
     $(selector).append(headerTr$);

     return columnSet;
   }

   function appendOptionsInInvoiceTable(){
     $('table tr:first').append($('<th/>').html("Options Available").attr('colspan', 2).attr('align', 'right'));
     $('table tr').not(':first').append($('<td/>').html('<button class="btn btn-success">Accept</button>'));
     $('table tr').not(':first').append($('<td/>').html('<button class="btn btn-danger">Reject</button>'));
   }
