// Étape 1

// $(document).ready(function() {
//   $('#swap').click(function() {
//     $('li').swapClass('this', 'that');
//     return false;
//   });
// });


// Étape 2

$(document).ready(function() {
  $('#swap').click(function() {
    $('li')
      .swapClass('this', 'that')
      .css('text-decoration', 'underline');
    return false;
  });
});
