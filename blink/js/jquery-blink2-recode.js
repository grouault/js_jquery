/**
* JQuery - Blink - Plug-in
*/
(function($){
  $.fn.blink = function(delay){
    setInterval($.proxy(this.toggle,this), delay||750);
  }
}(jQuery))