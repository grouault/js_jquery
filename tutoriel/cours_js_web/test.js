$(function() {
  $(".test_ajax").button().click(function() {
    var options = {
      dataType : "json",
      success : $.proxy(function(data) {
        var $elf = this.html("");
        $.each(data.test, function(idx, elmt) {
          $elf.append("<li>" + elmt.name + "</li>");
        });
      }, $(this).parent()),
      error : function(jqXHR, textStatus, errorThrown) {
        alert("plop" + errorThrown);
      }
    };
    $.ajax("content.js", options);
  });
  $("[ref$=toto]").css("padding", "1em").css({
    background : "red"
  });
});
