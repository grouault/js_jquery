$(function(){
	$('.fancybox').fancybox();
	
	$('.fancybox-iframe').bind('load-fancy', function() {
		alert('toto');
	});
	
	$('a.iframe').fancybox({
		/*
		'padding': 0,
		'width': 'auto',
		'height': 'auto',
		'showCloseButton': false,
		'hideOnContentClick': false,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',	
		*/
		'scrolling' : 'no',
		type : 'iframe',
		
		afterLoad: function() {
			$('this').trigger('load-fancy');

			/*
			 this.height = $('.fancybox-iframe').contents().find('img').height();
			 this.width = $('.fancybox-iframe').contents().find('img').width();
			 this.width = 200;
			 this.height = 600;	
			
			 this.height = this.parent.height();
			 this.width = this.parent.width();
			 
			 var stop = "stop";
			 
		        console.info( 'Current: ' + current.href );        
		        console.info( 'Previous: ' + (previous ? previous.href : '-') );
		        
		        if (previous) {
		            console.info( 'Navigating: ' + (current.index > previous.index ? 'right' : 'left') );     
		        }
		       
			alert(frame); */
		},
		beforeShow : function() {
			/*
			$('.fancybox-iframe').load(function() {
				alert("titi");
			});
			*/

		}

	});
});

/*
 'onComplete': function () {
  $('#fancybox-frame').load(function () {
    $('#fancybox-content').height($(this).contents().find('body').height() + 20);
  });
}

 function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
  ==> sur l'iframe  onload='javascript:resizeIframe(this);' 
 
 */