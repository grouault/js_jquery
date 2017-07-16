/* https://groups.google.com/forum/?fromgroups=#!topic/fancybox/fXS7CkHrSKU 
 * http://www.picssel.com/playground/jquery/getDimensionFromIframe_27may12.html
 * */
$(function(){

  $('a.frame-test').fancybox({
    openEffect : 'elastic',
    closeEffect : 'elastic',
    fitToView: false,
    nextSpeed: 0, //important
    prevSpeed: 0, //important
	afterLoad: function() {
		/*
		this.width = $('.fancybox-iframe').contents().find('img').width();
	    var newHeight = $('.fancybox-iframe').contents().find('html').height() + 100;
	    this.height = newHeight;
	    var $ancyBoxInner = $('.fancybox-inner');
	    var $ancyBoxOuter = $('.fancybox-outer');
	    $ancyBoxOuter.height(newHeight);
	    $ancyBoxInner.height(newHeight);
		*/
	},
    beforeShow: function(){      
      /*
      this.width = $('.fancybox-iframe').contents().find('img').width();
      var newHeight = $('.fancybox-iframe').contents().find('html').height() + 100;
      this.height = newHeight;
      var $ancyBoxInner = $('.fancybox-inner');
      var $ancyBoxOuter = $('.fancybox-outer');
      $ancyBoxOuter.height(newHeight);
      $ancyBoxInner.height(newHeight);
      $ancyBoxInner.css({
        height : newHeight,
        overflow : 'scroll'
      });
      parent.$(this).width(100);
      $.fancybox.update();
      var stop = "stop";
      */
   	    this.width = ($('.fancybox-iframe').contents().find('img').width()) + 50;
	    var newHeight = $('.fancybox-iframe').contents().find('html').height() + 100;
	    this.height = newHeight;
	    var $ancyBoxInner = $('.fancybox-inner');
	    var $ancyBoxOuter = $('.fancybox-outer');
	    $ancyBoxOuter.height(newHeight);
	    $ancyBoxInner.height(newHeight);
     },
     afterShow: function() {

    	  
	      var $ancyBoxInner = $('.fancybox-inner');
	      var $ancyBoxOuter = $('.fancybox-outer');
	      ;
	      setTimeout(function(){
	    	  $('.fancybox-iframe').height($ancyBoxOuter.height()-30)}, 500);
	      setTimeout(function(){
	    	  $ancyBoxInner.height($ancyBoxOuter.height())}, 500);
	     
    	}
    	
  });
      
});