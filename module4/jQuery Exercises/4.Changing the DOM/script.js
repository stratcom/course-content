$(document).ready(function() {

	$(".removeMe p").empty();
	console.log($("Remove text from removeMe"));

	$(".removeMe").empty();
	console.log($("Remove paragraph from removeMe"));

	$(".sandbox div").remove();
	console.log($("Remove div from sandbox"));

	$(".sandbox").append("<div class='target'></div>");
	console.log($("Add div called target to sandbox"));

	$(".target").append("<p class='newP'></p>");
	console.log($("Add div called target to sandbox"));

	$(".newP").append("Get your stinking paws off me, you damned dirty ape.");
	console.log($("Add text to newP"));


})