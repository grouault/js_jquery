(function ($) {
  /**  plugin de cr�ation d'ellipsis. */
  $.fn.ellipsis = function (o) {
    if (typeof o == "string") {
      o = {
        label : o
      };
    }
    o = $.extend({}, $.fn.ellipsis.options, o);
    if (o.firstCall) {
      $("<style>" + o.style + "</style>").appendTo("body");
      $.fn.ellipsis.firstCall = false;
    }
    var $elf = $(this);
    var calculatedHeight = $elf.height(),
    cssHeight = $elf.css("height");
    $elf.css("height", o.height);
    var fakeHeight = $elf.height();
    if (calculatedHeight > fakeHeight) {
      $(o.action.replace("${label}", o.label)) //
      .appendTo($elf.wrap(o.wrapper).parent()) //
      .click(o.click) //
      .mouseenter(o.mouseenter) //
      .mouseleave(o.mouseleave);
      
    } else {
      // on remet tout en ordre
      if (cssHeight) {
        $elf.css("height", cssHeight);
      } else {
        // On regarde si c'�tait en "auto"
        $elf.css("height", "auto");
        fakeHeight = $elf.height();
        if (fakeHeight != calculatedHeight) {
          // si c'�tait pas en auto on reforce
          $elf.css("height", calculatedHeight + "px");
        }
      }
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
    click : function () {
      $(this).fadeTo(0).prev().unwrap().removeClass("ellipsis_hover");
      $(this).remove();
    },
    mouseenter : function () {
      $(this).parent().find("> *").addClass("ellipsis_hover");
    },
    mouseleave : function () {
      $(this).parent().find("> *").removeClass("ellipsis_hover");
    }
  };
})(jQuery)

$(function () {
  $(".wdg_ellipsis").each(function () {
    $(this).find(".wdg_ellipisable").each(function () {
      $(this).ellipsis("Lire la suite...");
    });
  });
});
