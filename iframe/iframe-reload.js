$(function(){
  /**
   * Rechargement de l iframe par mise a jour de l attribut src.
   *  Le rechargement se fait a partir de la page courante.
   */
  $('.reload').click(function(){
    $('.js_reloaderFrame').attr('src', function (i, val){ return val;});
  });
  
  /**
   * Ce code ne semble pas conctionner ???
  $('.reload-test').click(function(){
    $('.js_reloaderFrame')[0].contentWindow.location.reload(true);  
  }); 
  */
  
  /**
   * Charger une nouvelle url dans l'iframe.
   *  Le rechargement se fait a partir de la page courante.
   */
  $('.loadNewUrl').click(function(){
    $('.js_reloaderFrame').attr("src","http://www.w3schools.com/html/default.asp");
  });
  
      
  /**
   * Rechargement de l'iframe par event.
   */
  $('.link-reload').click(function(){
    $(this).trigger('link-reload-evt');
  });
  
  $('body').bind('link-reload-evt', function(){
    $('.reload').click();
  });
  
  
  /**
   * On est dans l'iframe. On recharge le parent.
   * Permet de reloader l'iframe en appelant
   *  une méthode définit dans le parent.
   */
  $('.reload-parent').click(function(){
    // self.parent.location.reload();
    window.parent.triggerComplete();
  });

  /**
   * Evenement declenche au rechargement de l'iframe.
   */
  $('.js_reloaderFrame').load(function(){
    alert("iframe-load");
  });
  
});

/**
 * Declenche un evenement qui permet 
 *  de recharger l'iframe sur le body.
 */
function triggerComplete(){
  $('body').trigger('link-reload-evt');
}

