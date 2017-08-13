// Étape 1

// $(document).ready(function() {
//   $('.target').grandparent().addClass('highlight');
// });


// Étape 2

// $(document).ready(function() {
//   var $target = $('.target');
//   $target.grandparent().addClass('highlight');
//   $target.hide();
// });


// Étape 3

$(document).ready(function() {
  $('.target').grandparent().andSelf().addClass('highlight');
});
