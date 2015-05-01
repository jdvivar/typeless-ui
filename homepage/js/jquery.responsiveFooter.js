// responsive footer

function responsiveFooter (){
	
	$(window).bind("load resize", function() {
		
		if ($(this).width() < 768) {
			$('.footer-bg').css('height',$('footer').height()+40);
		} else {
			$('.footer-bg').css('height',$('footer').height()+130);
		}
		
	});
	
	$( window ).resize();
	
}