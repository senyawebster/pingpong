//Back-End Logic
var items = [];

function pingPong(number) {
	for (i = 1; i <= number; i+=1) {
		if (i % 15 === 0) {
			items.push("<li>pingpong</li>");
		} else if (i % 3 === 0) {
			items.push("<li>ping</li>");
		} else if (i % 5 === 0) {
			items.push("<li>pong</li>");
		} else {
			items.push("<li>" + i + "</li>");
		}
	}
};
//Front-End Logic
$(document).ready(function() {
	$("form#formInput").submit(function(event) {
		event.preventDefault();
		var userInput = parseInt($("input#userInput").val());
		pingPong(userInput);
		$("ul#resultsList").append(items);
	});
});
