$(document).ready(function() {
    $('#firstButton').hide('slow');
    
    $('#secondButton').click(function () {
        $('#firstButton').toggle(300);
        
    });
});