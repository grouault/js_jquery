$(document).ready(function(){
   
  // 1- il faut detecter que l'on a du js pour afficher la structure.	
	
  // principe : remplacement de la stucture li par un select.
  $elf = $('.wdg_auto_trigger_select'); // recuperation du ul parent
  $elf.after('<select name="notice-filter" class="notice-filter"></select>'); // insertion du select.
  $select = $('.notice-filter'); 
  $elf.find('li').each(function(i, li){ 
	// remplacement de chaque li par une nouvelle option du select.
    $a = $(li).find('a');
    $option = '<option value="' + $a.attr('href')+ '">' + $a.text() + '</option>'
    $select.append($option);
  });
  $elf.remove(); // on retire le ul du html.
  
  // selectionner l'option voila a partir de sa value.
  /*
  $select.find('option').each(function(i, option){
	alert($(option).val());
  });
  */
  var val = "yahoo";
  var $ptionToSelect = $select.find("'option:contains(" + val + ")'");
  if ($ptionToSelect) {
    $select.val($ptionToSelect.val())
  }
});