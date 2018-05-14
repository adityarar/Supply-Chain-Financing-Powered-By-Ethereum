function submitForm(){
  return false;
}

function bindModalToInvoices(){
  $("#excelDataTable tr").not(":first").click(function(){
      $("#myModal").modal();
  });
}

$( document ).ready(function() {
  buildHtmlTable('#excelDataTable');
  bindModalToInvoices();
  $('table tr').addClass("animated fadeInDown");
  $('form > div > div > label').addClass('animated fadeInDown');
  $('form > div > div > input').addClass('animated fadeInDown');
  $('form button').addClass('animated fadeInDown');
  $('form').show();
  $('.nav-tabs li').click(function(){
    $('.nav-tabs li').removeClass('active');
    $(this).addClass('active');
  });
  $('.nav-tabs li:nth-child(1)').click(function(){
    $('.invoiceList').hide();
    $('.invoiceForm').show();
  });
  $('.nav-tabs li:nth-child(2)').click(function(){
    $('.invoiceForm').hide();
    $('.invoiceList').show();
  });
  $('#invoiceBiddings tr').addClass('clickable-row');
  $('#invoiceBiddings').on('click', '.clickable-row', function(event) {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
