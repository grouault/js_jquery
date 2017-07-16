 for ( var selector in this.actionsInit) {
      (function( actionInit) {
        acts.find(selector).button({
          text : false,
          icons : {
            primary : actionInit.icon
          }
        }).click(function() {
          $(this).closest(".ap_outer").trigger(actionInit.action);
        });
      })( this.actionsInit[selector]);
    }
 
 
 
 
 actionsInit : {
   ".ap_action_previous" : {
     icon : "ui-icon-seek-prev",
     action : "previous"
   },
   ".ap_action_play" : {
     icon : "ui-icon-play",
     action : "play"
   },
   ".ap_action_pause" : {
     icon : "ui-icon-stop",
     action : "pause"
   },
   ".ap_action_next" : {
     icon : "ui-icon-seek-next",
     action : "next"
   }
 },
 
 
 var nouvo=$.extend({},obj1,obj2);
 
 $(".ap_slide").slide({
   plop : "toto"
 });
 /************/
 $.widget("ui.slide",{
   options : {
       plop : "titi",
       ploup :"tutu"
     
   },
   _create : function() {
     this.options.plop == "toto";
       this.options.ploup == "tutu";
     
     
   },
   _init : function() {}
 });
 