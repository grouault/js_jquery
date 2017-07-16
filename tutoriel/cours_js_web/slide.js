/** Licence GPL2 **/
var slide_js_widget_init = {
  options : {
    sub : "> *",
    actionsTemplate : "<div class='ap_actions'>"//
        + "<button type='button' class='ap_action_previous'>&nbsp;</button>" //
        + "<button type='button' class='ap_action_play'>&nbsp;</button>" // //
        + "<button type='button' class='ap_action_pause'>&nbsp;</button>" //
        + "<button type='button' class='ap_action_next'>&nbsp;</button>" //
        + "<input size='2' class='ap_action_interval' value='3' />" //
        + "</div>"
  },
  outerEvents : {
    previous : function() {
      $(this).trigger("inc",[-1, 'plop']);
    },
    next : function() {
      $(this).trigger("inc", [+1]);
    },
    play : function() {
      var $uper = $(this);
      $uper.trigger("pause");
      $uper.data("interval", setInterval($.proxy(function() {
        $(this).trigger("next");
      }, $uper), parseFloat($uper.find(".ap_action_interval").val()) * 1000));
    },
    pause : function() {
      var $uper = $(this);
      if ($uper.data("interval")) {
        clearInterval($uper.data("interval"));
        $uper.data("interval", false);
      }
    },
    inc : function(evt,inc,plop) {
      var $uper = $(this);
      var idx = $uper.data("current") + inc;
      var l = $uper.find(".ap_content").fadeOut().length;
      if (idx < 0) {
        idx = l - 1;
      } else if (idx >= l) {
        idx = 0;
      }
      $uper.find(".ap_content:eq(" + idx + ")").fadeIn();
      $uper.data("current", idx);
    }
  },
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
  _create : function() {
    var e = this.element, o = this.options;
    e.addClass("ap_container").wrap("<div class='ap_outer'></div>");
    e.find(o.sub).addClass("ap_content").hide();
    var $uper = e.closest(".ap_outer");
    var acts = $uper.append($(o.actionsTemplate)).find(".ap_actions");
    for ( var selector in this.actionsInit) {
      (function(selector, actionInit) {
        acts.find(selector).button({
          text : false,
          icons : {
            primary : actionInit.icon
          }
        }).bind("click",function() {
          $(this).closest(".ap_outer").trigger(actionInit.action);
        });
      })(selector, this.actionsInit[selector]);
    }
    for ( var evt in this.outerEvents) {
      $uper.bind(evt, this.outerEvents[evt]);
    }
    $uper.data("current",0);
    $uper.find(".ap_content:first").show();
  }
};
$.widget("ui.slide", slide_js_widget_init);