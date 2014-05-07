$(document) .ready(function() {
	$(".sandbox p:nth-child(2)").css({
		"color":"#FF3300",
	});
	console.log($("Changed text color in paragraph 2"));

	$(".sandbox p:nth-child(1)").css({
		"background": "rgba(34,138,34,0.5)",
	});
	console.log($("Changed background color in paragraph 1"));

	$(".sandbox p:nth-child(3)").empty()
	console.log($("Removed text of paragraph 3"));

	$(".sandbox li:nth-child(4)").css({
		"color":"#6600CC",
	});
	console.log($("Change the text color of the fourth list item"));

	$(".sandbox li:nth-child(2)").text("I did it!")
	console.log($("Change the text of the second list item"));

})