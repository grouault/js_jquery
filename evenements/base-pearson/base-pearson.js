/**
 * Created by grouault on 14/08/2017.
 */
$(function(){

    var $body = $('body');
    var $container = $('#container');
    var $switcher = $('#switcher');

    var $switcherDefault = $switcher.find('#switcher-default');
    var $switcherNarrow = $switcher.find('#switcher-narrow');
    var $switcherLarge = $switcher.find('#switcher-large');

    var $buttons = $switcher.find('.button');

    $switcher.find('h3').click(function () {
        $buttons.toggle('slow');
    });

    $buttons.hover(function () {
        $(this).addClass('hover')
    }, function () {
        $(this).removeClass('hover')
    });

    $buttons.click(function(e){
        console.log('buttons : this = ', this);
        $body.removeClass();
        $buttons.removeClass('selected');
        $(this).addClass('selected');
        if ( $(this).is('#switcher-narrow') ) {
            $body.addClass('narrow');
        }
        if ( $(this).is('#switcher-large') ) {
            $body.addClass('large');
        }
    });

    $('span').click(function(e){
        console.log('span - this = ', this);
    });

});