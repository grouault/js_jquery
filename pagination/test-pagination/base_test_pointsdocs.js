window.pagingFilter={
  chain:[ ]
}

$(function () {
  $(".wdg_pageable").paging({
    filter : "pagingFilter",
    templates : {
      previousImage : "mediacs/fleche_gauche.gif",
      nextImage : "mediacs/fleche_droite.gif",
      plusImage : "mediacs/plus.png"
    },
    scheme:{
      paging : {
        afterPages:true,
        plus:true
      },
      cycling : {
        animate:true,
        timer :300,
        loop:true
      },
      page : {
        size : 8,
        columns : 4
      }
    }
  });
  
  var filter=$(".elt-notice-filter");
  var select=filter.find("select"),data=filter.data("data"),done={};
  
  $(".reference").each(function(){
    var k=$(this).attr("rel");
    if( done[k] )return;
    done[k]=true;
    var opt=$("<option></option>").appendTo(select);
    opt.val( "."+k).html(data[k]);
  });
  select.change(function(){
      window.pagingFilter.chain=[ { selector: "*", action:"hide"}, { selector:$(this).val(), action:"show" }];
      $(".wdg_pageable").trigger("refresh");
  })
  window.stop();
});

