jQuery(function( $ ){
	
	// On cache le contenu de notre page
    $("#content").hide(); 
    // On affiche notre page de chargement
    $("#loading").show(); 
    // Lorsque notre contenu est chargé
    $(window).load(function() { 
    		// On fait disparaitre notre page de chargement
        	$("#loading").fadeOut(function() { 
        		//Ensuite on fait apparaitre notre contenu
            $("#content").fadeIn(1000); 
      	  }); 
 	 });
						
});