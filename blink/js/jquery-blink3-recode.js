/**
* JQuery - Blink - Plug-in
*/
(function($){
  $.fn.blink = function(options){
    var options = $.extend({ delay:1000 }, options);
	var $elf = this;
    setInterval(function()$elf.toggle(), options.delay);
  }
}(jQuery))