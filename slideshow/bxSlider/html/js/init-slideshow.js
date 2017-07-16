$(document).ready(function(){
	initSliders();
});

function initSliders() {
	
	$('.wdg_slider_diapo').each(function(){
		
		var $elf = $(this);
		// initialisation des valeurs par defaut.
		var nbSlide = 2; // nombre de slide a afficher.
		var $lideWidth = 150; // taille d'un slide.
		var $lideMargin = 3; // marge entre les slides.
		var imgMaxWidth = 140; // taille de l'image.
	
		// Calcule de la taille du diaporama.
		var widthMax = nbSlide * $lideWidth + $lideMargin;	
		$elf.closest('.mainBoxSlider').width(widthMax + 2);
		
		var $efaultHeight = $elf.closest('.mainBoxSlider').height(); 
		
		// resizing des images.
		$elf.find('.sliderItem').each(function(){
			
			var $sItem = $(this);
			
			// style du slider.
			$sItem.css({
				/* 'border': '1px solid #ccc' */
			});
			var borderLeftWidth = $sItem.css('borderLeftWidth');
			var borderRightWidth = $sItem.css('borderRightWidth');
			
			// fixation de la hauteur du bloc SliderItem.
			var widthElemItem = $lideWidth - (borderLeftWidth + borderRightWidth);
			$sItem.width(widthElemItem);
			/*
			$sItem.css({
				'width' : $sItem.width()
			});
			*/
			$sItem.height($efaultHeight);
			
			// on fixe la taille de l'image en fonction de imgMaxWidth si necessaire.
			var $img = $sItem.find('.sliderPic>img')
			if ($img.width() > imgMaxWidth) {
				$img.width(imgMaxWidth);
			}
			
			/*
			// rechargement de l'image et suppression du '?'
			var urlImg = $img.attr('src');
			urlImg = urlImg.substring(0, urlImg.indexOf("?"));
			$img.attr("url", urlImg);
			*/
						
			// Mise a jour de la zone de donnnes
			var $sContent = $sItem.find('.sliderContent').width(widthElemItem);
			$sContent.find('.newsTopic').hide();
			var $sContentWrapper = $sItem.find('.sliderContentWrapper').width(widthElemItem);
			$sContentWrapper.find('.newsTitle').css({
				'font-size': '12px'
			});
			
			// Mise a jour de la zone image.
			if ($img.height() < ( $sItem.height()-$sContent.height() )) {
				$img.css('paddingTop', ( (($sItem.height()-$sContent.height()) - $img.height()) / 2)); // on va centrer l'image
			}

		});
		
		$elf.closest(".portlet").css("height", ($efaultHeight + 200));
		
		
		/* init carrousel diapo */
		$elf.bxSlider({
			mode: 'fade',
			captions: true,
			auto: true,
			autoControls: true,
			adaptiveHeight: true
		});
		
		/* init carrousel */
		/*
		$elf.bxSlider({
			  minSlides: nbSlide,
			  maxSlides: nbSlide,
			  slideWidth: $lideWidth,
			  slideMargin: $lideMargin
		  }); */
		
	});
	
}