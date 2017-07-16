$(document).ready(function(){
	initSliders();
});


function initSliders() {
	
	$('.wdg_slider_diapo').each(function(){
		var $elf = $(this);
		var $efaultWidth = $elf.closest('.mainBoxSlider').width();
		var $efaultHeight = $elf.closest('.mainBoxSlider').height(); 
		// resizing des images.
		$elf.find('.sliderItem').each(function(){
			var $sItem = $(this);
			$sItem.width($efaultWidth);
			$sItem.height($efaultHeight);
			var $img = $sItem.find('.sliderPic>img');
			var urlImg = $img.attr('src');
			urlImg = urlImg.substring(0, urlImg.indexOf("?"));
			$img.attr("url", urlImg);
			var $sContent = $sItem.find('.sliderContent');
			if ($img.height() < ( $sItem.height()-$sContent.height() )) {
				$img.css('paddingTop', ( (($sItem.height()-$sContent.height()) - $img.height()) / 2)); // on va centrer l'image
			}
		});
		
		
		$elf.closest(".portlet").css("height", ($efaultHeight + 200));
		
		$elf.bxSlider({
			slideWidth: $efaultWidth,
			preloadImages : 'visible',
			  onSliderLoad: function(){
				  	// prise en compte de la premiere image et du TimeStamp associe.	  
					$elf.find('.sliderItem').each(function(){
						var $sItem = $(this);
						var $img = $sItem.find('.sliderPic>img');
						var urlImg = $img.attr('src');
						console.log("urlImg = " + urlImg);
						if (urlImg.indexOf("?timestamp=") > 0) {
							urlImg = urlImg.substring(0, urlImg.indexOf("?timestamp="));
							$img.attr("src", urlImg);							
						} 
					});
			  }
		  });
		
	});
	
}

