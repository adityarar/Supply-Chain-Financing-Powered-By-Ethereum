$(document).ready(function(){
    buildHtmlTable('#excelDataTable');
    $("table tr").not(":first").click(function(){
        $("#myModal").modal();
    });
    $('table td').addClass("animated fadeInDown");
    $('table th').addClass("animated fadeInDown");
    $('#excelDataTable').show();

});
