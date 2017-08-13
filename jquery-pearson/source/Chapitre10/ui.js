// Couleur animée

$(document).ready(function() {
  $('#color-animate').click(function() {
 
    // $('#mydiv').animate({
    //   color: '#fff',
    //   backgroundColor: '#000'
    // }, 'slow');

    // $('#mydiv').animate({
    //   color: '#fff',
    //   backgroundColor: '#000'
    // }, 'slow', 'easeInQuart');

    $('#mydiv').animate({
      color: '#fff',
      backgroundColor: '#000'
    }, {
      duration: 'slow', 
      easing: 'easeInQuart'
    });

  });  
});

// Inversion de classe
$(document).ready(function() {
  $('#do-toggle').click(function() {
    $('#toggle-class').toggleClass('highlight', 'slow');
  });
});

// Explosion
$(document).ready(function() {
  $('#do-explode').click(function() {
    $('#explode').effect('explode', {pieces: 16}, 800);
  });
});

// Liste triabale
$(document).ready(function() {
  // $('#sort-container').sortable();
  
  $('#sort-container').sortable({
    opacity: .5,
    axis: 'y',
    cursor: 'move'
  });
  
});

// Dialogue
$(document).ready(function() {
  // $('#do-dialog').click(function() {
  //   $('#dlg').dialog();
  // });
  var $dlg = $('#dlg');
  var dlgText = $dlg.text();
  $dlg.dialog({
    autoOpen: false,
    title: dlgText,
    open: function() {
        $dlg.empty();
    },
    buttons: {
      'ajouter un message': function() {
        $dlg.append('<p>Message ajouté</p>');
      },
      'effacer les messages': function() {
        $('p', $dlg).remove();
      }
    },
	width: "350px"
  });
  $('#do-dialog').click(function() {
    $dlg.dialog('open');    
  });
    
});
