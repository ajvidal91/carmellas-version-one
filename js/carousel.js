var images = ["photos/front.jpg","photos/cheese-one.jpg", "photos/grocery-five.jpg",
"photos/grocery-six.jpg", "photos/got-cheese.jpg","photos/grocery-one.jpg","photos/grocery-five.jpg",
"photos/history-one.jpg","photos/jessie-one.jpg","photos/grocery-one.jpg","photos/sub-one.jpg",
"photos/sub-two.jpg","photos/sub-three.jpg","photos/sub-four.jpg","photos/sub-five.jpg"];

var img = document.getElementById("slider-img");
img.setAttribute("src", images[0])

var total = images.length;
var imagecounter = 0;

function slider () {

  if (imagecounter <= total) {
    imagecounter++;
  }

  if (imagecounter == total) {
    imagecounter = 0;
  }

document.getElementById("slider-img");
img.setAttribute("src", images[imagecounter]);
}

setInterval(slider, 3000)
