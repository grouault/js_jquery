// Ajouter une classe aux éléments de liste de premier niveau.
$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');
});

// Ajouter une classe aux liens.
$(document).ready(function() {
  $('a[href^=mailto:]').addClass('mailto');
  $('a[href$=.pdf]').addClass('pdflink');
  $('a[href*=henry][href!=mailto:henryiv@king.co.uk]').addClass('henrylink');
  
  $('a').filter(function() {
    return this.hostname && this.hostname != location.hostname;
  }).addClass('external');
});

// Affecter des classes aux lignes paires et impaires de la tablea (effet de bande).
$(document).ready(function() {
  // $('tr:odd').addClass('alt');
  $('tr:nth-child(even)').addClass('alt');
  
  $('td:contains(Henry)').nextAll().andSelf().addClass('highlight');//.siblings()
  $('th').parent().addClass('table-heading');
});