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
           $elf.parent().data("section", initData);
     } catch (e) { 
     }     
 });
	
});