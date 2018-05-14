 $( document ).ready(function() {
   buildHtmlTable('#excelDataTable');
   appendOptionsInInvoiceTable();
   $('table tr').addClass("animated fadeInDown");
   $('#excelDataTable').show();
 });
