/**
 * Widget de pagination.
 *
 * Tous les éléments accèder par des String sont préfixés par ui-paging.
 * ie. les data, event et les class CSS
 *
 */
$.widget("ui.paging", {
  _usOptions : {
    events : {
      ".ui-paging-pageable" : {
        /*
         * exemple de filtre :
         * filter={ chain : [ { selector:".notice", action:"hide" }, { selector:".type-PtD_SiteWeb", action:"show" }, ]    }
        */
        "ui-paging-refresh" : function () {
            var $uper = $(this);
            // avec ou sans animation
            if( $uper.data("ui-paging-widget").options.scheme.cycling.animate ){
                $uper.animate({opacity:0.1},function(){
                  $uper.trigger("ui-paging-refresh-do");
                });
            } else {
              $uper.trigger("ui-paging-refresh-do");
            }      
        },
        "ui-paging-refresh-do" : function () {
          var $uper = $(this);
          var outer=$uper.closest(".ui-paging-outer").removeClass("ui-paging-first-page ui-paging-last-page");
          var widget=$uper.data("ui-paging-widget"), isOdd=!$uper.hasClass("ui-paging-odd-page"), state=$uper.data("ui-paging-state");
          var selectors=widget._usOptions.selectors, 
              scheme = widget.options.scheme,childrenSelector=widget.options.dom.elements,
              elementsClass=isOdd?"ui-paging-odd-page-element":"ui-paging-even-page-element";
          var elements=$uper.children(childrenSelector);
          if( elements.length == 0 ) return ;
          // on relance le filtre
          elements.removeClass(".ui-paging-unfiltered .ui-paging-filtered");
          var filter = window[widget.options.filter];
          if( filter && filter.chain && filter.chain.length ){
            for(var i=0; i< filter.chain.length ; i++){
              var f=filter.chain[i];
              if( f && f.selector && f.action && typeof $uper[f.action] =='function' ){
                widget._usOptions.filterActions[f.action](elements.filter(f.selector));
              }
            }
          };
          // on recupere le resultat du filtre
          elements=elements.filter(childrenSelector+":not(.ui-paging-filtered)");
          // on adapte les boutons de pagination au nouveau contenu
          var maxPages= elements.length == 0 ? 0 : Math.ceil( elements.length / scheme.page.size );
          state.page=state.page > maxPages ? 1 : state.page > 0 ? state.page : maxPages ;
          state.page==1 && (! scheme.cycling.loop) && outer.addClass("ui-paging-first-page");
          state.page==maxPages && (! scheme.cycling.loop) && outer.addClass("ui-paging-last-page");
          widget.element.find(selectors.total).html(maxPages);
          widget.element.find(selectors.current).html(state.page);
          // on calcule les hauteurs des élémenta affichés 
          var maxHeight=0,toMaximize=[];
          for(var i=0,l=elements.length;i<l;i++){
             var elementPage=Math.ceil((i+1)/scheme.page.size);
             if( elementPage == state.page ){ // uniquement affichés
                widget.options.elementFormat(i,elements[i],elementPage);
                var $elf=$(elements[i]).addClass(elementsClass).height("auto");
                maxHeight=Math.max(maxHeight,$elf.height());
                toMaximize.push(elements[i]);
             }
          };
          // une fois que l'on connait la taille max et la liste des éléments affichés on applique cette première a ces derniers.
          if( scheme.element.sameHeight && maxHeight > 0 ){
            $(toMaximize).height(maxHeight);
          }
          // on change de page.
          $uper.removeClass("ui-paging-odd-page ui-paging-even-page")
               .addClass(isOdd?"ui-paging-odd-page":"ui-paging-even-page")
               .children(childrenSelector)
                  .removeClass(isOdd?"ui-paging-even-page-element":"ui-paging-odd-page-element");
          // si besoin on lance l'animation
          if( scheme.cycling.animate ){
            $uper.animate({opacity:1});
          }
        },
        "ui-paging-prev":function(){ 
          $(this).data("ui-paging-state").page--;
          $(this).trigger("ui-paging-refresh");
        },
        "ui-paging-next":function(){ 
          $(this).data("ui-paging-state").page++;
          $(this).trigger("ui-paging-refresh");
        }
      },
      ".ui-paging-pages-list" : {
        click : function () {
          $(this).hide("fast");
        }
      },
      ".ui-paging-plus" : {        
        click : function () {
          var pages=$(this).closest(".ui-paging-plus-page").css("display","block!important");
          var list=pages.find(".ui-paging-pages-list").hide();
          if( pages.data("ui-paging-loaded") ){
            list.show("fast");
            return;
          }
          var $uper=pages.closest(".ui-paging-outer").find(".ui-paging-pageable");
          var widget=$uper.data("ui-paging-widget");
          var maxPage=parseInt(widget.element.find(widget._usOptions.selectors.total).html());
          var lbl=widget.options.templates.numpageLabel;
          var tmpTemplate="";          
          list.html("");
          for( var i=1; i <= maxPage; i++ ){
             var gotoPage=$("<a href='javascript:void(0)'></a>").appendTo(list).data("ui-paging-page-index",i).html(lbl+" "+i);
             gotoPage.click(function(){
                $uper.data("ui-paging-state").page=$(this).data("ui-paging-page-index");
                $uper.trigger("ui-paging-refresh");
             });
             gotoPage.wrap("<span class='ui-paging-goto-page'></span>");
          }
          list.show("fast");
        }
      },
      ".ui-paging-previous" : {
        click : function () {
          $(this).closest(".ui-paging-outer").find(".ui-paging-pageable").trigger("ui-paging-prev");
        }
      },
      ".ui-paging-next" : {
        click : function () {
          $(this).closest(".ui-paging-outer").find(".ui-paging-pageable").trigger("ui-paging-next");
        }
      }
    },
    selectors : {
      current : ".ui-paging-numpage-current",
      total : ".ui-paging-numpageTotal"
    },
    filterActions:{
      show:function(element){
        element.removeClass("ui-paging-filtered").addClass("ui-paging-unfiltered");
      },
      hide:function(element){
        element.removeClass("ui-paging-unfiltered").addClass("ui-paging-filtered");
      }
    },
    templates : {
      outer : "<div class='ui-paging-outer'></div>",
      paging : "<div class='ui-paging-pager'><div class='ui-paging-previous-page'><a class='ui-paging-previous'><img src='${previousImage}' alt='${previousLabel}' border='0'></a></div><div class='ui-paging-numpage'>${numpageLabel} <span class='ui-paging-numpage-current'></span>/<span class='ui-paging-numpageTotal'></span></div><div class='ui-paging-next-page'><a class='ui-paging-next'><img src='${nextImage}' alt='${nextLabel}' border='0'></a></div><div class='ui-paging-plus-page'><a class='ui-paging-plus'><img src='${plusImage}' alt='${plusLabel}' border='0'></a><span class='ui-paging-pages-list'></span></div></div>"
    },
    styles:[ 
        ".ui-paging-pageable{text-space-collapse:trim-inner;}",
        ".ui-paging-odd-page .ui-paging-page-element,.ui-paging-even-page .ui-paging-page-element{display:none;}",
        ".ui-paging-odd-page>.ui-paging-odd-page-element,.ui-paging-even-page>.ui-paging-even-page-element{display:inline-block;vertical-align:top;}",
        ".ui-paging-odd-page .ui-paging-page-element.ui-paging-filtered{display:none;}",
        ".ui-paging-even-page .ui-paging-page-element.ui-paging-filtered{display:none;}",
        ".ui-paging-last-page .ui-paging-pager .ui-paging-next-page,.ui-paging-first-page .ui-paging-pager .ui-paging-previous-page{display:none;}",
        ".ui-paging-pager{display:block;height:16px;margin-bottom:10px;text-align:center;z-index:100;}",
        ".ui-paging-numpage{color:#000000;display:inline-block;font-family:sans-serif;font-size:11px;font-weight:bold;vertical-align:top;}",
        ".ui-paging-previous-page,.ui-paging-next-page,.ui-paging-plus-page{display:inline-block;vertical-align:top;cursor:pointer;}",
        ".ui-paging-plus{position:absolute;margin:0 5px 3px 0;}",
        ".ui-paging-goto-page{margin:3px;display:inline-block;text-align:center;height:12px;font-size:10px;border:1px outset #EEE;}",
        ".ui-paging-goto-page a{text-decoration:none;color:#333;}",
        ".ui-paging-pages-list{display:block;position:absolute;background:#FFF;z-index:1000;border:1px solid #AAA;}",
        ""
    ]
  },
  options : {
    filter : false, // nom (en string) de l'élément retournant la valeur du filtre sera appelé window[filter]
    dom : {
      elements : "li"
    },
    templates : {
      previousImage : "/mediacs/images/fleche_gauche.png",
      nextImage : "/mediacs/images/fleche_droite.png",
      plusImage : "/mediacs/images/plus.png",
      previousLabel : "Précédent",
      nextLabel : "Suivant",
      numpageLabel : "Page",
      plusLabel : "Plus"
    },
    scheme : {
      paging : { // pager == bouton page suivante/précédente.
        selector : false, // Ou le sélecteur de la boite (n'importe ou sur la page) ou sera ajouter le pager.
        beforePages : true, //
        afterPages : false,
        plus : false
      },
      page : {
        size : 8,
        columns : 2
      },
      cycling : {
        animate:true,
        loop:false
      },
      element : {
        sameHeight : true,
        forcedWidth : true // true = meilleure perf prend le premier élément comme unique référence ne pas mettre a false si plus de 100 éléments
      }
    },
    elementFormat:function (i, e) { $(e).find(".elt-numero").text(i+1); },
    timer : false
  },
  _bindEvents : function () {
    if (this._usOptions && this._usOptions.events) {
      var $uper = this.element,widget=this;
      $.each(this._usOptions.events, function (selector, events) {
        $.each(events, function (eventName, eventFunction) {
          $uper.find(selector).add($uper.filter(selector)).bind(eventName, eventFunction).data("ui-paging-widget",widget);
        });
      });
    }
  },
  _templatesInit : function () {
    // a ne faire qu'une fois.
    if( this.templates ) return;
    this.templates=$.extend(this.options.templates,this._usOptions.templates)
    for (var dstKey in this.templates) {
      if( this.templates[dstKey].indexOf("$") > -1 ){
        for (var srcKey in this.templates) {
          this.templates[dstKey] = this.templates[dstKey].replace("\$\{" + srcKey + "\}", this.templates[srcKey]);
        }
      }
    }
  },
  _purgeTextNodes:function () {
    var textNodes = [], node=this.element[0];    
    for( var i = 0, len = node.childNodes.length; i < len; ++i ){
        if ( node.childNodes[i].nodeType == 3) {
            textNodes.push(node.childNodes[i]);
        }
    }
    for( var i=0, l=textNodes.length;i < l;i++){
      node.removeChild(textNodes[i]);
    }
  },
  _template : function (name) {
    this._templatesInit();
    return this.templates[name];
  },
  _create : function () {
    this._purgeTextNodes();
    var s = this.options.scheme,
    e = this.element.addClass("ui-paging-pageable ui-paging-odd-page").data("ui-paging-state",{
      page :1
    }),
    styles = this._usOptions.styles;
    this.element = this.element.wrap(this._template("outer")).parent();
    this.element.width(this.element.width()); // on fixe la largeur de la boite !
    var elements = e.children(this.options.dom.elements).each(function (i, e) {
        $(this).data("initial-sort", i);
      }).addClass("ui-paging-page-element");
    var pagingCode = this._template("paging");
    // les boutons pour paginer sont avant après ou dans un autre endroit de la page...
    s.paging.beforePages && this.element.prepend(pagingCode);
    s.paging.afterPages && this.element.append(pagingCode);
    s.paging.selector && this.element.find(s.paging.selector).append(pagingCode);
    // L'afficahge des autres paes est-il activé ?
    s.paging.plus || $(".ui-paging-plus").remove();
    this.element.find(".ui-paging-pages-list").hide();
    // le layout est construit on attache les évènements.
    this._bindEvents();    
    // calcul du colonnage
    var cols=s.page.columns;
    if( cols > 1 && elements.length > 0 ){
      var wantedWidth=Math.floor(this.element.width()/cols); // largeur voulue tout compris (marge, bordure, padding...).
      if( s.element.forcedWidth ){
        // si la largeur est forcée, on ne prend comme référence que les valeurs du premiér élément paginé.
        var $elf=$(elements[0]),tmp=".ui-paging-page-element{";
        var spacing=$elf.outerWidth(true)-$elf.width(); // outerWidth(*true*) == marges incluses.
        $elf.width(wantedWidth-spacing);
        // on essaye de forcer pour tous avec une CSS pleine d'!important
        $.each(["padding-left","padding-right","margin-left","margin-right","border-width","width"],function(i,rule){
          tmp=tmp+rule+":"+$elf.css(rule)+"!important;"
        });
        styles.push(tmp+"}");
      }else{
        // si forcedWidth == false on lance le calcul parfait pour tous les éléments. 
        // cela ralentit le chargement de la page ATTENTION
        // ici on utilise d'ailleur un for{} plutot qu'un $.each pour plus de performance
        for(var i=0,l=elements.length;i<l;i++){
          var $elf=$(elements[i]);
          var spacing=$elf.outerWidth(true)-$elf.width(); // outerWidth(*true*) == marges incluses.
          $elf.width(wantedWidth-spacing);
        };
      }
    }
    // on applique les styles.
    $("<style></style>").html(styles.join("\n")).prependTo("head");
    // pour accèlérer l'impression de rendu on fais une passe sur la première page a l'initialisation.
    for(var i=0 ; i < s.page.size ; i++ ){
      $(elements[i]).addClass("ui-paging-odd-page-element");
    }
    // et après cette passe on lance le refresh standard.
    e.trigger("ui-paging-refresh");
  }
});


