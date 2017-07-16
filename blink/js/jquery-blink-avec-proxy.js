/**
* JQuery - Blink - Plug-in
*/
(function($){
  $.fn.blink = function(options){
    setInterval($.proxy(this.toggle,this), options&&options.delay||500);
  }
}(jQuery))