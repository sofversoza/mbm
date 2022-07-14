// MARQUEE TEXT FOR INTRO
function makeMarquee() {
  const title = "Mon Beau Monde Museum in Bordeaux";
  // using Array() constructor to create our title 50 times using the fill method, joined by a hyphen
  const marqueeText = new Array(50).fill(title).join(" — ");

  // grab our .marquee ( name of div ) span ( title ) from html file
  const marquee = document.querySelector(".marquee span");
  // set our repeating title as the content ( using innerHTML lets us set the content inside an element )
  marquee.innerHTML = marqueeText;
}

makeMarquee();

// GALLERY SLIDER AUTOMATIC NAVIGATION ( CARAVAGGIO ) //
let counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 5000);
