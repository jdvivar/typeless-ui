// Custom scripts
$(document).ready(function () {

	/* Activate Bootstrap tooltips */		
	$("[data-toggle=tooltip]").tooltip({
		container: "body"
	});

    // Collapse ibox function
    $('.collapse-link').click( function() {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').click( function() {
        var content = $(this).closest('div.ibox').hide('slow');
    });

	// Closing panels from left side
	$('.close-panel').click( function() {
        $(this).closest('div.panel').hide('slow');
    });

	// popover initialization
    $("[data-toggle=popover]")
        .popover();
});


// show/hide dismissible notification
	
function showNotification(){
	$('#timeout-alert').fadeIn('slow');
	$('#timeout-alert').css('display','inline-block');
	
	setTimeout(function(){$('#timeout-alert').fadeOut('slow');}, 5000);
}