// �tape 1
// $(document).ready(function() {
//   $('#switcher-large').bind('click', function() {
//     $('body').addClass('large');
//   });
// });

// �tape 2
// $(document).ready(function() {
//   $('#switcher-default').bind('click', function() {
//     $('body').removeClass('narrow');
//     $('body').removeClass('large');
//   });
//   $('#switcher-narrow').bind('click', function() {
//     $('body').addClass('narrow');
//     $('body').removeClass('large');
//   });
//   $('#switcher-large').bind('click', function() {
//     $('body').removeClass('narrow');
//     $('body').addClass('large');
//   });
// });

// �tape 3
// $(document).ready(function() {
//   $('#switcher-default').bind('click', function() {
//     $('body').removeClass('narrow');
//     $('body').removeClass('large');
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
//   $('#switcher-narrow').bind('click', function() {
//     $('body').addClass('narrow');
//     $('body').removeClass('large');
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
//   $('#switcher-large').bind('click', function() {
//     $('body').removeClass('narrow');
//     $('body').addClass('large');
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// });

// �tape 4
// $(document).ready(function() {
//   $('#switcher-default').bind('click', function() {
//     $('body').removeClass('narrow').removeClass('large');
//   });
//   $('#switcher-narrow').bind('click', function() {
//     $('body').addClass('narrow').removeClass('large');
//   });
//   $('#switcher-large').bind('click', function() {
//     $('body').removeClass('narrow').addClass('large');
//   });
// 
//   $('#switcher .button').bind('click', function() {
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// });

// �tape 5
// $(document).ready(function() {
//   $('#switcher-default').bind('click', function() {
//     $('body').removeClass();
//   });
//   $('#switcher-narrow').bind('click', function() {
//     $('body').removeClass().addClass('narrow');
//   });
//   $('#switcher-large').bind('click', function() {
//     $('body').removeClass().addClass('large');
//   });
// 
//   $('#switcher .button').bind('click', function() {
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// });

// �tape 6
// $(document).ready(function() {
//   $('#switcher .button').bind('click', function() {
//     $('body').removeClass();
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// 
//   $('#switcher-narrow').bind('click', function() {
//     $('body').addClass('narrow');
//   });
//   $('#switcher-large').bind('click', function() {
//     $('body').addClass('large');
//   });
// });

// �tape 7
// $(document).ready(function() {
//   $('#switcher .button').bind('click', function() {
//     $('body').removeClass();
//     if (this.id == 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//     else if (this.id == 'switcher-large') {
//       $('body').addClass('large');
//     }
//     
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// });

// �tape 8
// $(document).ready(function() {
//   $('#switcher .button').click(function() {
//     $('body').removeClass();
//     if (this.id == 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//     else if (this.id == 'switcher-large') {
//       $('body').addClass('large');
//     }
//     
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//   });
// });

// �tape 9
// $(document).ready(function() {
//   $('#switcher h3').toggle(function() {
//     $('#switcher .button').addClass('hidden');
//   }, function() {
//     $('#switcher .button').removeClass('hidden');
//   });
// });

// �tape 10
// $(document).ready(function() {
//   $('#switcher h3').click(function() {
//     $('#switcher .button').toggleClass('hidden');
//   });
// });

// �tape 11
// $(document).ready(function() {
//   $('#switcher .button').hover(function() {
//     $(this).addClass('hover');
//   }, function() {
//     $(this).removeClass('hover');
//   });
// });

// �tape 12
// $(document).ready(function() {
//   $('#switcher').click(function() {
//     $('#switcher .button').toggleClass('hidden');
//   });
// });

// �tape 13
// $(document).ready(function() {
//   $('#switcher').click(function(event) {
//     if (event.target == this) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   });
// });

// �tape 14
// $(document).ready(function() {
//   $('#switcher').click(function() {
//     $('#switcher .button').toggleClass('hidden');
//   });
// });
// 
// $(document).ready(function() {
//   $('#switcher .button').click(function(event) {
//     $('body').removeClass();
//     if (this.id == 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//     else if (this.id == 'switcher-large') {
//       $('body').addClass('large');
//     }
//     
//     $('#switcher .button').removeClass('selected');
//     $(this).addClass('selected');
//     event.stopPropagation();
//   });
// });

// �tape 15
// $(document).ready(function() {
//   $('#switcher').click(function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   });
// });
// 
// $(document).ready(function() {
//   $('#switcher').click(function(event) {
//     if ($(event.target).is('.button')) {
//       $('body').removeClass();
//       if (event.target.id == 'switcher-narrow') {
//         $('body').addClass('narrow');
//       }
//       else if (event.target.id == 'switcher-large') {
//         $('body').addClass('large');
//       }
//     
//       $('#switcher .button').removeClass('selected');
//       $(event.target).addClass('selected');
//     }
//   });
// });

// �tape 16
// $(document).ready(function() {
//   $('#switcher').click(function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   });
//   
//   $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').unbind('click');
//   });
// });

// �tape 17
// $(document).ready(function() {
//   $('#switcher').bind('click.collapse', function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   });
//   
//   $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').unbind('click.collapse');
//   });
// });

// �tape 18
// $(document).ready(function() {
//   var toggleStyleSwitcher = function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   };
//   
//   $('#switcher').bind('click.collapse', toggleStyleSwitcher);
//   
//   $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').unbind('click.collapse');
//   });
// });

// �tape 19
// $(document).ready(function() {
//   var toggleStyleSwitcher = function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   };
//   
//   $('#switcher').bind('click.collapse', toggleStyleSwitcher);
//   
//   $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').unbind('click.collapse');
//   });
//   $('#switcher-default').click(function() {
//     $('#switcher').bind('click.collapse', toggleStyleSwitcher);
//   });
// });

// �tape 20
// $(document).ready(function() {
//   var toggleStyleSwitcher = function(event) {
//     if (!$(event.target).is('.button')) {
//       $('#switcher .button').toggleClass('hidden');
//     }
//   };
//   
//   $('#switcher').click(toggleStyleSwitcher);
//   
//   $('#switcher-narrow, #switcher-large').click(function() {
//     $('#switcher').unbind('click', toggleStyleSwitcher);
//   });
//   $('#switcher-default').click(function() {
//     $('#switcher').click(toggleStyleSwitcher);
//   });
// });

// �tape 21
// $(document).ready(function() {
//   $('#switcher').trigger('click');
// });

// �tape 22
// $(document).ready(function() {
//   $('#switcher').click();
// });

// �tape 22
// $(document).ready(function() {
//   $(document).keyup(function(event) {
//     switch (String.fromCharCode(event.keyCode)) {
//       case 'P':
//         $('#switcher-default').click();
//         break;
//       case 'C':
//         $('#switcher-narrow').click();
//         break;
//       case 'G':
//         $('#switcher-large').click();
//         break;
//     }
//   });
// });

// Version finale

$(document).ready(function() {
  // Activer l�effet de survol sur les boutons du s�lecteur de style.
  $('#switcher .button').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  // Permettre l�affichage et le masquage du s�lecteur de style.
  var toggleStyleSwitcher = function(event) {
    if (!$(event.target).is('.button')) {
      $('#switcher .button').toggleClass('hidden');
    }
  };
  $('#switcher').click(toggleStyleSwitcher);

  // Simuler un clic de mani�re � d�buter dans l��tat escamot�.
  $('#switcher').click();
  
  // La fonction setBodyClass() modifie le style de la page.
  // L��tat du s�lecteur de style est �galement actualis�.
  var setBodyClass = function(className) {
    $('body').removeClass();
    $('body').addClass(className);
    $('#switcher .button').removeClass('selected');
    $('#switcher-' + className).addClass('selected');
    
    if (className == 'default') {
      $('#switcher').click(toggleStyleSwitcher);
    }
    else {
      $('#switcher').unbind('click', toggleStyleSwitcher);
      $('#switcher .button').removeClass('hidden');
    }
  };

  // Invoquer setBodyClass() lors du clic sur un bouton.
  $('#switcher').click(function(event) {
    if ($(event.target).is('.button')) {
      if (event.target.id == 'switcher-default') {
        setBodyClass('default');
      }
      if (event.target.id == 'switcher-narrow') {
        setBodyClass('narrow');
      }
      else if (event.target.id == 'switcher-large') {
        setBodyClass('large');
      }
    }
  });

  // Invoquer setBodyClass() lors de l�appui sur une touche.
  $(document).keyup(function(event) {
    switch (String.fromCharCode(event.keyCode)) {
      case 'P':
        setBodyClass('default');
        break;
      case 'C':
        setBodyClass('narrow');
        break;
      case 'G':
        setBodyClass('large');
        break;
    }
  });
});
