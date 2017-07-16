$(document).ready(function(){
	
  var wdg = {
      initializable : [],//pool d'Ã©lÃ©ments Ã  initialiser
      /**
       *  Ajoute une initialisation d'Ã©lÃ©ment aprÃ¨s le chargement du DOM.
       *  @param selector (obligatoire) une chaine de caractÃ¨re contenant
       *          un sÃ©lecteur JQuery.
       *  @param initialize (obligatoire) une fonction de callback telle
       *          que this soit l'Ã©lÃ©ment sur lequel elle est appliquÃ©e.
       *  @param asAJQueryObject (optionnel) permet de prÃ©ciser si l'objet
       *          JQuery rÃ©sultant du selector doit Ãªtre traitÃ© comme un
       *          unique Ã©lÃ©ment surlequel appliquÃ© le callback ou si chacun
       *          de ses sous-Ã©lÃ©ments doit se voir appliquer le callback.
       *          Par dÃ©faut on applique le callback Ã  chacun des Ã©lÃ©ments
       *          indÃ©pendamment les uns des autres.
       * @return void() */
      pushInit : function(/*String*/selector, /*Function*/initialize, /*boolean (optionnel)*/asAJQueryObject) {
        wdg.initializable.push({
          selector : selector,
          initialize : initialize,
          asAJQueryObject : asAJQueryObject
        });
      },
      tools : {
        globalEval : window.execScript ? function(src) {
          window.execScript(src);
        } : function(src) {
          window.eval.call(window, src);
        },
        /**
         * EnlÃ¨ve l'Ã©chappement (encodage de type URL) des attributs d'un objet.
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
                    oStack.push(data[k]); // on empile pour le traiter Ã  la prochaine itÃ©ration
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
      },
      helpers : []
    };

  // au chargement de la page.
  
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
    
    /** selection d'un produit a ajouter. */
    $('.produit').click(function(e){
    	 if(!e.ctrlKey) {
    		 $('.produit').removeClass('produit-selected').addClass('produit');
    	 }
    	 $(this).addClass('produit-selected');  
    });
    
    /** bouton d'ajout de nouveaux produits. */
    $('.section-add').click(function(e){
    	var $selectedProduit = $('.produit-selected');
    	if ($selectedProduit.length == 0) {
    		alert("Vous devez selectionnez un produit!");
    	} else {
    		var $elect = $('.select-produit');
    		// recuperaton et traitement des produits.
    		$selectedProduit.each(function(index){
    			var $elf = $(this);
    			if ($elf.hasClass("disable-product")) {
    			  alert("produit invalide.");
    			  e.preventDefault();
    			} else {
            var produitTitle =$elf.val(); // recuperation de son label
            var optionValue = $elf.data("section").id + '#' + $elf.data("section").type;
            if ($elect.find('option[value="' + optionValue + '"]').length == 0) {
                var newOption = '<option value="' + optionValue + '">' + $elf.text().trim() + '</option>';
                $elect.append(newOption);   
            } else {
              alert("Vous avez deja selectionnez cette option");
            }    			  
    			}
    		});
    	}
    });
	
    /** bouton de suppression d'un produit selectionne. */
    $('.section-remove').click(function(e){
      var $elect = $('.select-produit');
      var $optionsSelected = $("select[name='produitSelected'] option:selected");
      if ($optionsSelected.length > 0) {
        $optionsSelected.remove();
      } else {
        alert("Vous devez selectionnez une options a supprimer.");
      }
    }); 
    
    unvalidateProduits();
    
});

/**
 * permet d'invalider les produits en selection.
 */
function unvalidateProduits(){
  
  /** recuperatoin des valeurs des criteres. */
  var activitesVal = [];
  $("select[name='activites'] option").each(function(index){
    activitesVal.push($(this).val());
  });
  
  var themesVal = [];
  $("select[name='themes'] option").each(function(index){
    themesVal.push($(this).val());
  });  
  
  var publicsVal = [];
  $("select[name='publics'] option").each(function(index){
    publicsVal.push($(this).val());
  });  
  
  /** initialisation de l'objet criteria. */
  var criteriasFilter = {
      type : 'off,sof,occ',
      options : {'seances' : false, 'permanent' : false, 'temporaire' : false},
      activites : activitesVal.join(","),
      themes : themesVal.join(","),
      publics : publicsVal.join(",")
  };
  
  /** renvoit true si le type du produit est valide. */
  var verifierType = function(produit){
    return (criteriasFilter.type.toLowerCase().indexOf(produit.data("section").type.toLowerCase()) > -1);
  };
  
  /** renvoit true
     - pour les occupations.
     - pour les off et sof a seances quand dans criteres seance vaut true.
  */
  var verifierOptionsSeances = function(produit){
    if ("off" == produit.data("section").type.toLowerCase() || "sof" == produit.data("section").type.toLowerCase()) {
      if (criteriasFilter.options.seances) {
        return criteriasFilter.options.seances == produit.data("section").options.seances;
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
        return criteriasFilter.options.permanent == produit.data("section").options.permanent;
      }
      if (criteriasFilter.options.temporaire) {
        return criteriasFilter.options.temporaire == !produit.data("section").options.permanent;
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
		var activites = $produit.data("section").activites;
		if (activites.length > 0) {
			var state = false;
			$.each(activites, function(index, value){
				if (criteriasFilter.activites.indexOf(value) > -1 && !state) { state = true; }
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
			$.each(themes, function(index, value){
				if (criteriasFilter.themes.indexOf(value) > -1 && !state) { state = true; }
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
			$.each(publics, function(index, value){
				if (criteriasFilter.publics.indexOf(value) > -1 && !state) { state = true; }
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
  
}

