/*
*
*  MANIPULATION DES ATTRIBUTS
*
*/

// Utiliser .attr() pour ajouter la classe "inhabitants" à tous les paragraphes.
$(document).ready(function() {
  $('p').each(function(index) {
    var currentClass = $(this).attr('class');
    $(this).attr('class', currentClass + ' inhabitants');
  });
});

// Utiliser attr() pour ajouter id, rel et title.
$(document).ready(function() {
  $('div.chapter a[href*=wikipedia]').each(function(index) {
    var $thisLink = $(this);
    $(this).attr({
      'rel': 'external',
      'id': 'wikilink-' + index,
      'title': 'en savoir plus sur ' + $thisLink.text() + ' sur Wikipédia'
    });
  });
});

/*
*
*  LIENS DE RETOUR AU DÉBUT
*
*/
$(document).ready(function() {
  $('<a id="top" name="top"></a>').prependTo('body');
  $('<a href="#top">retour au début</a>').insertAfter('div.chapter p:gt(2)');
});

/*
*
*  NOTES DE BAS DE PAGE
*
*/
$(document).ready(function() {
  $('<ol id="notes"></ol>').insertAfter('div.chapter');
  $('span.footnote').each(function(index) {
    $(this)
      .before(
        ['<a href="#foot-note-',
          index+1,
          '" id="context-',
          index+1,
          '" class="context">',
            '<sup>' + (index+1) + '</sup>',
        '</a>'
        ].join('')
      )
      .appendTo('#notes')
      .append( '&nbsp;(<a href="#context-' + (index+1) + '">contexte</a>)' )
      .wrap('<li id="foot-note-' + (index+1) + '"></li>');
  });
});


/*
*
*  PASSAGES EXTRAITS
*
*/
$(document).ready(function() {
  $('span.pull-quote').each(function(index) {
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position', 'relative');

    var $clonedCopy = $(this).clone();

    $clonedCopy
      .addClass('pulled')
      .find('span.drop')
        .html('&hellip;')
      .end()
      .prependTo($parentParagraph)
      .wrap('<div class="pulled-wrapper"></div>');

    var clonedText = $clonedCopy.text();
    $clonedCopy.html(clonedText);
  });
});
