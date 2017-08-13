
$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat( $speech.css('fontSize') );
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;      
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);        
    }
    // if (this.id == 'switcher-large') {
    //   num *= 1.4;
    // } else if (this.id == 'switcher-small') {
    //   num /= 1.4;
    // }
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });
});

// $(document).ready(function() {
//   var $firstPara = $('p:eq(1)');
//   $firstPara.hide();  
//   $('a.more').click(function() {
//     if ($firstPara.is(':hidden')) {
//       $firstPara.fadeIn('slow'); 
//       $(this).text('Pour en savoir plus...');
//     } else {
//       $firstPara.fadeOut('slow');
//       $(this).text('Pour en savoir plus...');
//     }
//     return false;
//   });
// });

$(document).ready(function() {
  var $firstPara = $('p:eq(1)');
  $firstPara.hide();  
  $('a.more').click(function() {
    $firstPara.slideToggle('slow');
    var $link = $(this);
    if ( $link.text() == "Pour en savoir plus..." ) {
      $link.text('Pour en savoir moins...');      
    } else {
      $link.text('Pour en savoir plus...');
    }
    return false;
  });
});

// $(document).ready(function() {
//   
//   var $firstPara = $('p:eq(1)');
//   $firstPara.hide();
//   $('a.more').click(function() {
//     var $link = $(this);
//     $firstPara.animate({
//       opacity: 'toggle',
//       height: 'toggle'
//     }, 
//     'slow'
//     );
//     if ( $link.text() == "Pour en savoir plus..." ) {
//       $link.text('Pour en savoir moins...');      
//     } else {
//       $link.text('Pour en savoir plus...');
//     }
//     return false;
//   });
//   
// });


// $(document).ready(function() {
//   $('div.label').click(function() {
//     var paraWidth = $('div.speech p').outerWidth();
//     var $switcher = $(this).parent();
//     var switcherWidth = $switcher.outerWidth();
//     $switcher.animate({
//       'left': paraWidth - switcherWidth, 
//       height: '+=20px', 
//       borderWidth: '5px'
//     }, 'slow');
//     
//   });
// });

// $(document).ready(function() {
//   $('div.label').click(function() {
//     var paraWidth = $('div.speech p').outerWidth();
//     var $switcher = $(this).parent();
//     var switcherWidth = $switcher.outerWidth();
//     $switcher
//       .animate({left: paraWidth - switcherWidth}, 'slow')
//       .animate({height: '+=20px'}, 'slow')
//       .animate({borderWidth: '5px'}, 'slow');
//   });
// });

$(document).ready(function() {
  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .fadeTo('fast',0.5)
      .animate({
        'left': paraWidth - switcherWidth
      }, 'slow')
      .fadeTo('slow',1.0)
      .slideUp('slow', function() {
        $switcher
          .css('backgroundColor', '#f00');
      })
      .slideDown('slow');
  });
});

// $(document).ready(function() {
//   $('p:eq(2)')
//     .css('border', '1px solid #333')
//     .click(function() {
//       $(this).slideUp('slow')
//         .next().slideDown('slow');
//     });
//   $('p:eq(3)').css('backgroundColor', '#ccc').hide();
// });
  


$(document).ready(function() {
  var $thirdPara = $('p:eq(2)');
  $thirdPara
    .css('border', '1px solid #333')
    .click(function() {
      $(this).next().slideDown('slow',function() {
       // $thirdPara.slideUp('slow');
      });
    });
  $('p:eq(3)').css('backgroundColor', '#ccc').hide();
});

// Faire apparaître les éléments cliquables lors du survol.
$(document).ready(function() {
  $('h2, div.button, div.label, span.more').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});