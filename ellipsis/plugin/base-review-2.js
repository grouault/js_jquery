(function($) {
  /**  plugin de cr�ation d'ellipsis. */
  $.fn.ellipsis = function(o) {
    if (typeof o == "string") {
      o = {
        label : o
      };
    }
    o = $.extend({}, $.fn.ellipsis.options, o);
    if (o.firstCall) {
      $("<style>" + o.style + "</style>").appendTo("body");
      $.fn.ellipsis.options.firstCall = false;
    }
    var $elf = $(this);
        
    $elf.prepend('<div class="ellispis-comparable"></div>');
    $ellipsisComparable = $('.ellispis-comparable').height(o.height);
    var fakeHeight = $ellipsisComparable.height(); 
    
    
    $elf.data("calculatedHeight", $elf.height())//
    .data("cssHeight", $elf.css("height"))//
    .bind("sizeBack", o.sizeBack)//
    // .css("height", o.height);
    // var fakeHeight = $elf.height();
    if ($elf.data("calculatedHeight") > fakeHeight) { 
      $elf.height(fakeHeight);
      $ellipsisComparable.remove();
      $(o.action.replace("${label}", o.label)) //
      .appendTo($elf.wrap(o.wrapper).parent()) //
      .click(o.click) //
      .mouseenter(o.mouseenter) //
      .mouseleave(o.mouseleave);
    } else {
      $ellipsisComparable.remove();
      $elf.trigger("sizeBack");
    }
   
  }
  $.fn.ellipsis.options = {
    firstCall : true,
    height : "3.5em",
    action : "<div class='ellipsis_action'>${label}</div>",
    wrapper : "<div class='ellipsis_container'></div>",
    label : "...",
    style : ".ellipsis_container > *{overflow:hidden;}" //
        + ".ellipsis_container > * + *{cursor:pointer;}" //
        + ".ellipsis_hover{background:#EFEFEF;}" //
        + ".ellipsis_hover.ellipsis_action{color:blue;}",
    click : function() {
      $(this).fadeTo(0).prev().unwrap().removeClass("ellipsis_hover").trigger("sizeBack");
      $(this).remove();
    },
    mouseenter : function() {
      $(this).parent().find("> *").addClass("ellipsis_hover");
    },
    mouseleave : function() {
      $(this).parent().find("> *").removeClass("ellipsis_hover");
    },
    sizeBack : function() {
      var $elf = $(this);
      // on remet tout en ordre
      if ($elf.data("cssHeight")) {
        $elf.css("height", $elf.data("cssHeight"));
      } else {
        // On regarde si c'�tait en "auto"
        $elf.css("height", "auto");
        fakeHeight = $elf.height();
        if (fakeHeight != $elf.data("calculatedHeight")) {
          // si c'�tait pas en auto on reforce
          $elf.css("height", $elf.data("calculatedHeight") + "px");
        }
      }
    }
  };
})(jQuery)
$(function() {
  $(".wdg_ellipsis").each(function() {
    $(this).find(".wdg_ellipisable").each(function() {
      $(this).ellipsis("Lire la suite...");
    });
  });
});
