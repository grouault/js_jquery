$(function() {
	$("input").click(function() {
	  $("#log").html( $(":checked").val() + " is checked!" );
	  /* ('input[name="autopub"]').val(); */
	});
});

