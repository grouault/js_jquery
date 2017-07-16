/** Licence GPL2 **/
var roller_js_widget_init = {
  options : {
    sub : ":first"
  },
  _create : function() {
    var $elf = this.element, o = this.options;
    var $fe = o.firstElement = $elf.find(this.options.sub);
    var $se = o.secondElement = $fe.clone().appendTo($elf);
    $elf.css("position", "relative");
    if (!($fe.width() > $elf.width())) {
      $fe.add($se).width($elf.width()).css({
        display : "block",
        position : "absolute"
      });
    }
    $elf.data("cpt", 0).data("options", o).bind("roll", this._animation);
    $elf.trigger("roll");
  },
  _animation : function() {
    var $elf = $(this);
    var o = $elf.data("options"), pl = parseInt($elf.data("cpt")) - 3;
    var $ubs = o.secondElement.add(o.firstElement);
    if (Math.abs(pl) >= o.firstElement.width()) {
      $ubs.filter(":last").after($ubs.filter(":first"));
      pl = 0;
    }
    var ww = $ubs.filter(":first").css({
      left : pl
    }).width();
    $ubs.filter(":last").css({
      left : pl + ww
    });
    $elf.data('cpt', pl);
    setTimeout($.proxy(function() {
      this.trigger("roll");
    }, $elf), 50);
  }
};
$.widget("ui.roller", roller_js_widget_init);