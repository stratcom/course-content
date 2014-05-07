$(document).ready(function() {

	console.log($(".sample").children(".firstParagraph").children(".targetText"));

	var x = $(".sample").children(".firstParagraph").children(".targetText").text();
	
	$(".sample").children(".firstParagraph").children(".nextText").text(x);

	$(".sample").children(".emptyText").text(x);


});