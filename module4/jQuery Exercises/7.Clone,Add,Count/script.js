$(document).ready(function() {

	 $('.add-item').click(function () {
	 	
	 	//capture the value of the selector
        var x = $('#numberToAdd').val();
               
        // Clone the 'li' item in the template and insert text into it.
        for(var i=0; i<x; i++) {
            $('.template li').clone().text
            // Append the cloned element to the list.
            ("Pay no attention to the man behind the curtain!").appendTo
            ('.sample-list');
        }

      	// Update the counter at the bottom with the number of items 
 		//that have been added by incrementing its' value.
      $('.count').text(x);
 }); 

})