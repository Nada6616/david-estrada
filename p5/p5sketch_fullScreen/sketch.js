
let cat;

function setup() {
  // make canvas full screen
  createCanvas(windowWidth, windowHeight);

  cat = loadImage('cat.png');

  noCursor();
}


function draw() {
  // adding clear() to the draw loop will clear each frame, erasing object trails
  clear();


  image(cat, mouseX - 150, mouseY - 100, cat.width / 3, cat.height / 3);
  // fill(255, 50, 50);
  // ellipse(mouseX, mouseY, 100);
}
