$(document).ready(function() {
    $("#show-sidebar").click(function() {
        $("#sidebar-overlay").show();
    });
    $("#transparent-box,.menu-items").click(function() {
        $("#sidebar-overlay").hide();
        $("#settings").removeClass("visible");
    });


    $("#reports").mouseover(function() {
        $("#sec_menu").show();
    });


    $(".clicked-reports").click(function() {
        $("#sec_menu").hide();
    });

    $('.datatable-grid').DataTable({
        scrollX: true,
        paging: true,
        
    });
     $('#selct-material').change(function() {
        $("#popup-container").addClass("visible");
    });
    $("#close-popup").click(function() {
        $("#popup-container").removeClass("visible");
    });

    
    $("#setting-list").click(function(){
        $("#settings").addClass("visible");
    });
    $("#back-to-main-menu").click(function(){
        $("#settings").removeClass("visible");
    });

    var $div = $('<div />').appendTo('body');
    $div.attr('id', 'apptitle');
    $div.html("Telemedicine Application");
    $div.addClass("app-title");

});
