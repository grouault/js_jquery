/**
* JQuery - Blink - Plug-in
*/
(function($){
  $.fn.blink = function(options){
	var $elf = this;
    setInterval(function()$elf.toggle(), options&&options.delay||500);
  }
}(jQuery))