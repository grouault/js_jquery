/**
 * Created by grouault on 14/08/2017.
 */
$(function(){


    $('a.link').click(function(e){
        console.log('event on a.link - e', e.target);
    });

    $('span.link').click(function(e){
        console.log('event on span.link - e', e.target);
    });


    $('div.link').click(function(e){
        console.log('event on div.link - e', e.target);
        if ($(e.target).is('a.link')){
            console.log('J\'ai cliqué sur le lien');
        } else {
            console.log('J\'ai cliqué ailleurs que sur le lien');
        }
    });

    // simulation de click.
    $('span.link').trigger('click');

});