$(document).ready(function(){
	
	$('.wdg_ellipsis').find('.wdg_ellipsisable').each(function () {  
      var $elf = $(this);
	  var h1 = $elf.height();
	  $elf.css("height", "3.5em"); // a peu pres une hauteur de 3 lignes.
	  var h2 = $elf.height();
	  if (h2 < h1) {
	    // reduction de la zone de texte.
		var ellipsis = $elf.wrap('<div class="ellipsis"></div>').parent();  
	    var btn=$("<div class='button-ellipsis'>Lire la suite...</div>").appendTo(ellipsis).click(function(){
	      btn.remove();
	      $elf.unwrap();
	      $elf.css({
	        'overflow' : 'visible',
	        'height' : 'auto'
	      })
	    });	  
	  } else {
	    // on remet tout en ordre
	    $elf.css("height", "auto");
	    h2 = $elf.height();
	    if (h2 != h1) { // si c'était pas en auto on reforce
	      $elf.css("height", h1 + "px");
	    }
	  }
	});
	
});