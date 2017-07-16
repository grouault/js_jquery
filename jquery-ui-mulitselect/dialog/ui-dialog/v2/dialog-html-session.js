$(document).ready(function() {
	
	
	$('.session-more-time').dialog({
		autoOpen: false,
		title: 'Basic Dialog',
		/*
		dialogClass: 'test-dialog',
	        create: function() {
			$(".session-form").append($(".test-dialog"));
		}
		,*/
		buttons: {
			"Ok": function() {
				var $sessionForm = $("form[name='session-form']");
				if (validerSessionForm($sessionForm)) {
				  $sessionForm.submit();
				}
				return false;
			},
			"Annuler": function() {
				 $(this).dialog('close');
				 return false;
			}
		} 			
	})
	
	$('.session-opener').click(function() {
		$elf = $(this);
		var posteValue = $elf.closest(".session-data").attr("rel");
		if (posteValue != "") {
			$('sesposte').val(posteValue);
		}
		
		// mise a jour du titre en fonction du poste ou groupe
		$('.session-more-time').dialog("option", "title", "Dialog Title");
		// $('.session-more-time').dialog("option", "show", "Slide");
		$('.session-more-time').dialog('open');
		return false;
	});

	$('.btn-cancel').click(function(){
		$('.session-more-time').dialog('close');
		return false;
	});
	
});

function validerSessionForm(form){
	alert('titi');
	return true;
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