


var pics = ["photos/cheese-one.jpg", "photos/front.jpg"]

var gallery = 0;

var clickCount = 0;

$(document).ready(function() {
  $("#forward").on("click", function() {
    gallery += 1;
    if (gallery == pics.length) {
      gallery = 0;
    }

    $("#pics").attr("src", pics[gallery])
  });

  $("#back").on("click", function() {
    gallery -= 1;
    if (gallery == pics.length <= 0) {
      gallery = 8;
    }
    $("#pics").attr("src", pics[gallery])
  });
});
