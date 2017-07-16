(function($)
{
  $.fn.blink = function(options)
  {
     var defaults = { delay:500 };
     var options = $.extend(defaults, options);

     return this.each(function()
     {
        var obj = $(this);
		var $elf = $(this);
		
		/*
		setInterval(function(){			  
		    with($elf){
		     fadeTo(100, css("opacity") < 1 ? 1 : 0.1);
		    }
		  }, 
		  options&&options.delay||500);*/
		
		
		with($elf){
			setInterval(function(){			  
				animate({
				  opacity : (css("opacity") < 1 ? 1 : 0.1)
				},100 );
			  }, 
			  options&&options.delay||500);
		}
			

		


		
		/* setInterval(function(){$elf.toggle()}, options&&options.delay||500); */
		
		/*
        setInterval(function()
        {
            if($(obj).css("visibility") == "visible")
            {
                $(obj).css('visibility','hidden');
            }
            else
            {
                $(obj).css('visibility','visible');
            }
        }, options.delay);*/
    });
  }
}(jQuery))


	/*
	setInterval(function(){			  
		with($elf){
		 fadeTo(100, css("opacity") < 1 ? 1 : 0.1);
		}
	  }, 
	  options&&options.delay||500);
    }*/

/*
(function($){
  $.fn.blink = function(options){
    var $elf = this;
    setInterval(function(){$elf.toggle()}, options&&options.delay||500);
  }
}(jQuery))
*/



