$(document).ready(function() {
	
	/**
	 * initialize de dialogue session-more-time.
	 */
	$('.session-more-time').dialog({
		autoOpen: false,
		modal: true,
		resizable: false,
		show : 'slide',
		direction: 'up',
		title: 'Default-title',
		dialogClass: 'session-more-time-parent',
		/*
		create: function() {
			$(".session-form").append($(".test-dialog"));
		}
		,*/
		buttons: {
			"Ok": function() {
				$(this).find('.submit-more-time').click();
			},
			"Annuler": function() {
				 $(this).dialog('close');
				 return false;
			}
		} 			
	})
	
	$('.session-opener').click(function() {
		$elf = $(this);
		
		var $sessionMoreTime = $('.session-more-time');
		
		var type = $elf.attr('rel');
		var title = "";
		if ("poste" == type) {
			// title = $sessionMoreTime.data("data-titreposte");
			var test = $sessionMoreTime.attr("data-titregroupe");
			title = "Poste";
		} else {
			// title = $sessionMoreTime.data("data-titregroupe");
			title = "Groupe";
		}		
		
		var posteValue = $elf.closest(".session-data").attr("rel");
		if (posteValue != "") {
			$('sesposte').val(posteValue);
		}
		
		// mise a jour du titre en fonction du poste ou groupe
		$sessionMoreTime.dialog("option", "title", title);
		$sessionMoreTime.dialog('open'); 
		return false;
	});

	$('.btn-cancel').click(function(){
		$('.session-more-time').dialog('close');
		return false;
	});
	
});

function validerSessionForm(form){
	alert('titi');
	return false;
}


/*
function validerSessionForm2(){
	alert("valider session form");
	// fonction ajax de mise a jour des sessions.
	$.ajax("http://localhost:8080/postesbsi-web/jsp/test.html",{
		data : params,
			type : 'POST',
			contentType:"application/x-www-form-urlencoded; charset=UTF-8",
			error :function(jqXHR, textStatus, errorThrown){
				alert('Une erreur est survenue, veuillez recommencer s\'il vous plait');
			},
			success : function(data){
			if (data){
				alert(data);
			}
		}
	});		
	return false;
}*/