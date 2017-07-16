$(document).ready(function(){
	initSliders();
});

function initSliders() {
	
	$('.wdg_slider_diapo').each(function(){
		var $elf = $(this);
		/* init carrousel diapo */
		$elf.bxSlider({
			mode: 'fade',
			captions: true,
			auto: true,
			autoControls: true
		});
		var $bxPager = $('.bx-pager');
		/*
		$bxPager.css({
		  'bottom': '5px',
		  'color': '#FF0000',
		  'z-index' : '500'	  
		});
		*/
		
		var bxControls = $('.bx-controls'); 
		// $elf.append(bxPager);
	});
	
}