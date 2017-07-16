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
		
		
		// application du slider.
		$elf.bxSlider({
			mode: 'fade',
			captions: true,
			auto: true,
			autoControls: true,
			slideWidth: $efaultWidth,
			  onSliderLoad: function(){
			    // do funky JS stuff here
				var img = $elf.find("img");
			    alert('Slider has finished loading. Click OK to continue!');
			  }
		  });
		
	});
	
}


// resizing des images.
/*
$elf.find('.sliderPic>img').each(function(){
	var $img = $(this);
	if ($img.width() < $efaultWidth) {
		$img.width($efaultWidth);
		if ($img.height() < $efaultHeight) {
			$img.height($efaultHeight);
		}
	}
});
*/

/*
 * Init carroussel
 */
/*
minSlides: 2,
maxSlides: 2,
slideWidth: 250,
slideMargin: 10
*/


/*
 * Init diaporama.
 */ 
/*
mode: 'fade',
captions: true,
auto: true,
autoControls: true,
adaptiveHeight: true
*/
