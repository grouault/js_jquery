function do_go_home(){
      window.location.href="http://www.voila.fr/";
}
  
function alert_message(){
  alert("alert-message!")
} 
function recall_timer(){
                $("body").trigger("recall_timer"); 
}

$(function (){
  $("body").bind("recall_timer", function(){
        $(this).data("timer") && clearTimeout($(this).data("timer"));
        $(this).data("timer", setTimeout(alert_message,10000));
  });
  $(this).data("timer", setTimeout(alert_message,10000)); // initialement lance sur document.
  var poll=$("body,input,textarea");
  $.each(["blur","focus","focusin","focusout","load","resize","scroll","unload","click","dblclick",
      "mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change",
      "select","submit","keydown","keypress","keyup"],
    function(i,e){
      poll.bind(e,recall_timer);
    });
});