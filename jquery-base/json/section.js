$(function(){
	
  /** cache la zone wait. */
  var $waitingZone = $('.wdg_section_wait').hide();
	
  var wdg = {
		
	  tools : {
	    globalEval : window.execScript ? function(src) {
	      window.execScript(src);
	    } : function(src) {
	      window.eval.call(window, src);
	    },
	    /**
	     * Enleve l echappement (encodage de type URL) des attributs d'un objet.
	     * Le parcours de l'objet est profond.
	     * @return void */
	    unescapeData : function(o) {
	      var oStack = [ o ];
	      var deepness = 0; // compteur anti infini
	      while (oStack.length && deepness < 500) { // Tant que la pile n'est pas vide
	        var data = oStack.shift();
	        for ( var k in data) { // pour chaque attribut de l'objet
	          switch (typeof data[k]) {
	            case 'object':// les tableaux sont des objets :) les new String() aussi :(
	              if (typeof data[k].toLowerCase == 'undefined') {
	                oStack.push(data[k]); // on empile pour le traiter à la prochaine itération
	                deepness++; // risque d'infini...
	                break;
	              }
	              // else c'est un "new String()
	            case 'string':
	              data[k] = unescape(data[k]);
	              break;
	            default:
	              // NOOP RAF
	          }
	        }
	      }
	    }
	  }

  };

  /** attachement des donnes json de la page. */
  $("script:not([src])[type='json/init-parent-data']").each(function(index){
	 try {
	   var $elf = $(this);
	   var initData = $.parseJSON($elf.html());
	   wdg.tools.unescapeData(initData);
	   $elf.parent().addClass("produit").data("section", initData);
		   $elf.remove();
	 } catch (e) {	
		
	 }
	 
  });
		
  /** 
   * Code relatif au widget de selection d un produit
   */
  
  /** selection d'un produit a ajouter. */
  $('.produit').click(function(e){
  	 if(!e.ctrlKey) { // pour la selection multiple.
  		 $('.produit').removeClass('produit-selected').addClass('produit');
  	 }
  	 $(this).addClass('produit-selected');  
  });
  
  /** bouton d'ajout de nouveaux produits. */
  $('.wdg_produit_add').click(function(e){
  	var $selectedProduit = $('.produit-selected');
  	if ($selectedProduit.length == 0) {
  		alert("Vous devez selectionnez un produit!");
  	} else {
  		var $elect = $("select[name='selectedProduits']");
  		// recuperaton et traitement des produits.
  		$selectedProduit.each(function(index){
  			var $elf = $(this);
  			if ($elf.hasClass("disable-product")) {
  			  alert("produit invalide.");
  			  e.preventDefault();
  			} else {
  				var optionValue = $elf.data("section").id + '#' + $elf.data("section").type;
  				if ($elect.find('option[value="' + optionValue + '"]').length == 0) {
  					var newOption = '<option value="' + optionValue + '">' + $elf.text().trim() + '</option>';
  					$elect.append(newOption);   
  				} else {
  					// option deja selectionne : do Nothing.
  				}    			  
  			}
  		});
  	}
  });  
  
  /** bouton de suppression d'un produit selectionne. */
  $('.wdg_produit_remove').click(function(e){
    // var $elect = $('.select-produit');
    var $optionsSelected = $("select[name='selectedProduits'] option:selected");
    if ($optionsSelected.length > 0) {
      $optionsSelected.remove();
    } else {
      alert("Vous devez selectionnez une options a supprimer.");
    }
  });
  
  /*
  $('input[name="typesProduit"]').click(function(e){
	  if ($('input[name="typesProduit"]:checked').length > 0){
		  $('.produit-options').hide();
		  var state = false;
		  $('input[name="typesProduit"]:checked').each(function(index){
			 if ($(this).val() == "off" || $(this).val() == "sof") { state = true; }
		  });
		  if (state) { $('.produit-options').show(); }
	  }
  });
  */
  
  /** permet de mettre a jour la zone produit. */
  $('.wdg_unvalidate').click(function(){
	  $waitingZone.show();
	  setTimeout('unvalidateProduits()', 2000);	  
  });
  
  /** declenche un evenemnt pour rafraichir la zone produit. */
  $('.filter-produit-activites').click(function(){
	  $('.wdg_unvalidate').click(); //Todo : filtrer par type.
  });
  
  initWaitZone();
  unvalidateProduits();
  
});


/**
 * postionnement de la zone de mise a jour des donnees.
 */
function initWaitZone() {
	
	// ajustement de la zone globale.
	var $waitingZone = $('.wdg_section_wait');
	var heightParent = $waitingZone.parent().height() + $('.wdg_produit_all').height() + 10; // 10 supplement marge.
	$waitingZone.css({
		'height' : heightParent
	});
	
	// positionnement de la zone message
	var $waitZoneData = $('.wdg_section_wait_data');
	var marginTop = ($waitZoneData.parent().height() - 50) / 2; 
	// var width = $waitZoneData.find("img")[0].width + $waitZoneData.find("span").width();  
	var marginLeft = ($waitZoneData.parent().width() - $waitZoneData.width()) / 2; 
	$waitZoneData.css({
		'marginTop' : marginTop,
		'marginLeft' : marginLeft
	});
	
}

/**
 * permet d'invalider les produits en selection.
 */
function unvalidateProduits(){
	  
	  var $zoneWaiting = $('.wdg_section_wait');
	
	  /** recuperation des valeurs des criteres. */
	  var activitesVal = []; // activites selectionnes.
	  $("select[name='activites'] option").each(function(index){
	    activitesVal.push($(this).val());
	  });
	  
	  var themesVal = []; // themes selectionnes
	  $("select[name='themes'] option").each(function(index){
	    themesVal.push($(this).val());
	  });  
	  
	  var publicsVal = []; // publics selectionnes
	  $("select[name='publics'] option").each(function(index){
	    publicsVal.push($(this).val());
	  }); 	  
	  
	  /** initialisation de l'objet criteria. */
	  var typesValues = []; // recuperation des types coches : occ, off, sof.
	  $('.produit-options').hide(); // on cache les options.
	  if ($('input[name="typesProduit"]:checked').length > 0){
		  $('input[name="typesProduit"]:checked').each(function(index){
			  var $elf = $(this);
			  typesValues.push($elf.val());
			  if ($elf.val()=='off' || $elf.val()=='sof') { $('.produit-options').show(); }
		  });
	  }

	  
	  // recuperation des options.
	  var optionsValues = {"seance" : false, "permanent" : false, "temporaire" : false};
	  if ($('input[name="produitOptions"]:checked').length > 0){
		  $('input[name="produitOptions"]:checked').each(function(index){
			  var $elf = $(this);
			  if ($elf.val() == "seance") { optionsValues.seance = true; }
			  if ($elf.val()== "permanent") {optionsValues.permanent = true; } 
			  if ($elf.val()== "temporaire") {optionsValues.temporaire = true; } 
		  });
	  }	  
	  
	  // var $frmSection = $('form[name="frmSection""]');
	  var criteriasFilter = {
	      type : typesValues.join(","),
	      options : {'seances' : optionsValues.seance, 'permanent' : optionsValues.permanent, 'temporaire' : optionsValues.temporaire},
	      activites : activitesVal.join(","),
	      themes : themesVal.join(","),
	      publics : publicsVal.join(",")
	  };
	  
	  /** renvoit true si le type du produit est valide. */
	  var verifierType = function(produit){
		if (criteriasFilter.type.length > 0) {
			return (criteriasFilter.type.toLowerCase().indexOf(produit.data("section").type.toLowerCase()) > -1);
		}
		return true;
	  };
	  
	  /** renvoit true
	     - pour les occupations.
	     - pour les off et sof a seances quand dans criteres seance vaut true.
	  */
	  var verifierOptionsSeances = function(produit){
	    if ("off" == produit.data("section").type.toLowerCase() || "sof" == produit.data("section").type.toLowerCase()) {
	      if (criteriasFilter.options.seances) {
	        return criteriasFilter.options.seances == produit.data("section").seances;
	      }
	    }
	    return true;
	  };	  
	  
	  /**
	   * renvoir les off et sof:
	   * - temporaire : quand temporaire est en critere de filtre.
	   * - permanent : quand permanent est en critere de filtre.
	   */
	   var verifierOptionsPermanent = function(produit){
	     if ("off" == produit.data("section").type.toLowerCase() || "sof" == produit.data("section").type.toLowerCase()) {
	       if (criteriasFilter.options.permanent) {
	         return criteriasFilter.options.permanent == produit.data("section").permanent;
	       }
	       if (criteriasFilter.options.temporaire) {
	         return criteriasFilter.options.temporaire == !produit.data("section").permanent;
	       }
	     }
	     return true;
	   };	  
	  
	   /**
	    * renvoit true si le produit a au moins un
	    *   critere d activite correspondant au filtre.
	    */
	    var verifierCriteresActivites = function($produit){
		  	if (criteriasFilter.activites.length > 0) {
		  		var activites = $produit.data("section").activites; // renvoit une liste d objet activites.
		  		if (activites.length > 0) {
		  			var state = false;
		  			$.each(activites, function(index, activite){
		  				if (criteriasFilter.activites.indexOf(activite.id) > -1 && !state) { state = true; }
		  			});
		  			return state; // produit non valide au regard de ce critere.
		  		}
		  	}
		  	return true; // pas de filtre sur activites.
	    };	   
	 
	    /**
	     * renvoit true si le produit a au moins un
	     *   critere d activite correspondant au filtre.
	     */
	    var verifierThemes = function($produit){
		   	if (criteriasFilter.themes.length > 0) {
		   		var themes = $produit.data("section").themes;
		   		if (themes.length > 0) {
		   			var state = false;
		   			$.each(themes, function(index, theme){
		   				if (criteriasFilter.themes.indexOf(theme.id) > -1 && !state) { state = true; }
		   			});
		   			return state; // produit non valide au regard de ce critere.
		   		}
		   	}
		   	return true; // pas de filtre sur activites.
	    };	    
	  
	    /**
	     * renvoit true si le produit a au moins un
	     *   critere d activite correspondant au filtre.
	     */
	    var verifierPublics = function($produit){
		   	if (criteriasFilter.publics.length > 0) {
		   		var publics = $produit.data("section").publics;
		   		if (publics.length > 0) {
		   			var state = false;
		   			$.each(publics, function(index, publi){
		   				if (criteriasFilter.publics.indexOf(publi.id) > -1 && !state) { state = true; }
		   			});
		   			return state; // produit non valide au regard de ce critere.
		   		}
		   	}
		   	return true; // pas de filtre sur publics.
	     };	    
	    
	     // parcours de l ensemble des produits pour invalidation.
	     $('.produit').removeClass("disable-product").each(function(index){
	       $elf = $(this);
	       var state = false; // indique l etat non grise ou grise : true = grise.
	       if (verifierType($elf)) { // check le type de produit
	    	 if (verifierOptionsSeances($elf)) { // check des options seances.
		   		if (verifierOptionsPermanent($elf)) {		  
		   		  if (verifierCriteresActivites($elf)) {
		   			if (verifierThemes($elf)) {
						if (!verifierPublics($elf)){ state = true };
		   			} else { state = true; }
		   		  } else { state = true; }
		   		} else { state = true; }
		     } else { state = true; }
	   	   } else { state = true; }

	       /** on grise ou non selon l etat. */
	       if (state) {
	         $elf.addClass("disable-product");
	       }
	     });
	     
	     $zoneWaiting.hide();
	
}