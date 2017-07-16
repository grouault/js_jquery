/**
 *  plugin topFancyBox.
 *  permet de deporter le lien dans le document parent.
 */
(function($) {
   $.fn.topFancybox = function(settings) {
       // var a = top.document.createElement('a');
	   var a = parent.document.createElement('a');
       a.style.display = 'none';
       a.class = this.class;
       $(a).addClass("test"); 
       // a.href = this.href;
       a.href =$(this).attr('href');
       //top.document.body.appendChild(a);
       parent.document.body.appendChild(a);
       parent.$('a.test').fancybox(settings);
       parent.$('a.test').click();
   };
})(jQuery);
	
$(document).ready(function() {
	/**
	 *  deport du lien dans le document parent.
	 */
	$("a.group").click(function(){
		$(this).topFancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'	:	200, 
			'overlayShow'	:	false,
			'titleShow'     :   true,
	        'titlePosition' :   'outside',
		});		
		return false;
	});

	/**
	 * appel du fancybox a partir de 
	 * 	la frame parente.
	 */
	$("a.frame2").click(function(){
		parent.$(this).fancybox();
		parent.$(this).click();
		return false;
	});
	
	$("a.frame3").fancybox();
	
});