
//Back-End Logic
var items = []

function pingPong (number) {
  // First if divisible by 15 b/c shortens two modulos to
  // one, lowest common denominator between 3 and 5.
  if (number % 15 === 0) {
    items.push("<li>pingpong</li>");
  } else if (number % 3 === 0) {
    items.push("<li>ping</li>");
  } else if (number % 5 === 0) {
    items.push("<li>pong</li>");
  } else {
    items.push("<li>" + number + "</li>");
  }
}



//Front-End Logic
$(document).ready(function(){
  $("form#formInput").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#userInput").val();

    pingPong(userInput);

    $("ul#resultsList").empty();

    for (i = 0; i < items.length; i++) {
      $("ul#resultsList").append(items[i]);
    }
  });
});
