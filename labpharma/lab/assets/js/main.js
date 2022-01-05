$(document).ready(function(){
    $("#show-sidebar").click(function(){
        $("#sidebar-overlay").show();
    });
    $("#transparent-box,.menu-items").click(function(){
        $("#sidebar-overlay").hide();
        
        $("#settings").removeClass("visible");
    });


    $("#reports").mouseover(function(){
        $("#sec_menu").show();
    });


    $(".clicked-reports").click(function(){
        $("#sec_menu").hide();
    });

    $('.datatable-grid').DataTable( {
        scrollX:        true,
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   true,
        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    } );
    
    $('#create-service-table').on('click', 'tr td .delete-r', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });

    $('#create-service-table').on('click', 'tr td .edit-r', function(e) {
        e.preventDefault();
        var componentName = $(this).closest('tr').find("td:eq(1)").text();
        $("#component_name").val(componentName);
        var units = $(this).closest('tr').find("td:eq(2)").text();
        $("#c_units").val(units);
        var normalrange = $(this).closest('tr').find("td:eq(3)").text();
        $("#normal_range").val(normalrange);
        var minimumrange = $(this).closest('tr').find("td:eq(4)").text();
        $("#minimum_range").val(minimumrange);
        var maximumrange = $(this).closest('tr').find("td:eq(5)").text();
        $("#maximum_range").val(maximumrange);
    });
    
    $(".show-search").click(function() {
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