$(document).ready(function(){
	initSliders();
});


function initSliders() {
	
	$('.wdg_slider_diapo').each(function(){
		
		var $elf = $(this);
		// initialisation des valeurs par defaut.
		var nbSlide = $elf.data("nbSlidesToShow") ? $elf.data("nbSlidesToShow") : 4; // nombre de slide a afficher.
		var slideWidth = 150; // taille d'un slide.
		var slideHeight = 150; // hauteur maximale du slide
		var slideMargin = 3; // marge entre les slides.
		var imgMargin = 5; // espace img <-> slide
		var imgMaxWidth = slideWidth  - (2 * imgMargin); // taille de l'image.
		
		// Calcule de la taille du diaporama (bloc conteneur)
		var widthMax = nbSlide * slideWidth + slideMargin;	
		var heightMax = slideHeight;
		$elf.closest('.mainBoxSlider').width(widthMax + 2);
		$elf.closest('.mainBoxSlider').height(heightMax); 
				
		// resizing des images.
		$elf.find('.sliderItem').each(function(){
						
			var $sItem = $(this);
			var borderLeftWidth = $sItem.css('borderLeftWidth');
			var borderRightWidth = $sItem.css('borderRightWidth');			
			
			// fixation de la hauteur du bloc SliderItem.
			var widthElemItem = slideWidth - (borderLeftWidth + borderRightWidth);
			$sItem.width(widthElemItem);
			$sItem.height(heightMax);			
			
			// on fixe la taille de l'image en fonction de imgMaxWidth si necessaire.
			var $img = $sItem.find('.sliderPic>img');
			if ($img.width() > imgMaxWidth) {
				$img.width(imgMaxWidth);
			}
			
			// Mise a jour de la zone de donnnes
			var $sContent = $sItem.find('.sliderContent').width(widthElemItem);
			$sContent.height(heightMax / 3);
			$sContent.find('.newsTopic').hide();
			$sContent.find('.periode').hide();
			$sContent.find('.structure-accueil').hide();
			var $sContentWrapper = $sItem.find('.sliderContentWrapper').width(widthElemItem).css({
				'marginLeft' : 0,
				'padding' : 0,
				'textAlign' : 'center'
			});
			$sContentWrapper.find('.newsTitle').css({
				'font-size': '12px',
			});
			
			// Mise a jour de la zone image.
			/*
			if ($img.height() < ( heightMax - $sContent.height() )) {
				var paddingTop = ((heightMax - $sContent.height()) - $img.height()) / 2;
				console.log("paddingTop = " + paddingTop);
				$img.css('paddingTop', paddingTop); // on va centrer l'image
			}
			*/
		
		});
		
		$elf.closest(".portlet").css("height", (heightMax + 200));
		$elf.bxSlider({
			  minSlides: nbSlide,
			  maxSlides: nbSlide,
			  slideWidth: slideWidth,
			  slideMargin: slideMargin
		  });
		
		
		
		
		/*
		// initialisation des valeurs par defaut.
		var nbSlide = 2; // nombre de slide a afficher.
		var $lideWidth = 150; // taille d'un slide.
		var $lideMargin = 3; // marge entre les slides.
		var $imgWidth = 140; // taille de l'image.
		
		var widthMax = nbSlide * $lideWidth + $lideMargin;
		
		var $elf = $(this);
		$elf.closest('.mainBoxSlider').width(widthMax + 2);
		var $efaultHeight = $elf.closest('.mainBoxSlider').height(); 
		
		// resizing des images.
		$elf.find('.sliderItem').each(function(){
			
			var $sItem = $(this);
			$sItem.css({
				'background-color': '#ffe', 
				'border': '2px solid #ccc'
			});
			var borderWidth = $sItem.css('borderWidth');
			alert("borderWidth = "  + borderWidth);
			$sItem.width($lideWidth - 2*borderWidth);
			$sItem.height($efaultHeight);
			var $img = $sItem.find('.sliderPic>img').width($imgWidth);
			
			var urlImg = $img.attr('src');
			urlImg = urlImg.substring(0, urlImg.indexOf("?"));
			$img.attr("url", urlImg);
			var $sContent = $sItem.find('.sliderContent');
			$sContent.find('.newsTopic').hide();
			
			if ($img.height() < ( $sItem.height()-$sContent.height() )) {
				$img.css('paddingTop', ( (($sItem.height()-$sContent.height()) - $img.height()) / 2)); // on va centrer l'image
			}
			


		});
		
		$elf.closest(".portlet").css("height", ($efaultHeight + 200));
		
		$elf.bxSlider({
			  minSlides: nbSlide,
			  maxSlides: nbSlide,
			  slideWidth: $lideWidth,
			  slideMargin: $lideMargin
		  });
		
		*/
	});
	
}