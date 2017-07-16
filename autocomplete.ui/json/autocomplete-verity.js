$(function() {
    
  // url :http://www.jensbits.com/2011/08/24/using-jquery-autocomplete-when-remote-source-json-does-not-contain-label-or-value-fields/	
	
  function log( message ) {
        $( "<div>" ).text( message ).prependTo( "#log" );
        $( "#log" ).scrollTop( 0 );
    }
 
    $( "#lbl-site-search" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "http://localhost:8080/servlet-project/JSONServlet",
                dataType: "json",
                type : "POST",
                success: function(data) {
                	var titi = "stop";
                    response( $.map(data, function( item ) {
                        return {
                            label: item.title,
                            value: item.title
                        }
                    }));
                }
            });
        },
        minLength: 2,
        select: function( event, ui ) {
            log( ui.item ?
                "Selected: " + ui.item.label :
                "Nothing selected, input was " + this.value);
        },
        open: function() {
            $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
        },
        close: function() {
            $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
        }
    });
        
});