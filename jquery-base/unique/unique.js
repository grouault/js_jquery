$(function(){
	
    var divs = $("div").get(); // unique() must take a native array

    // add 3 elements of class dup too (they are divs)
    divs = divs.concat($(".dup").get()); // on duplique les éléments qui ne sont plus unique.
    $("div:eq(1)").text("Pre-unique there are " + divs.length + " elements.");

    divs = jQuery.unique(divs);
    $("div:eq(2)").text("Post-unique there are " + divs.length + " elements.")
                  .css("color", "red");

});