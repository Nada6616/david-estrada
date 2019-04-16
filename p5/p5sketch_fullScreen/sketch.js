let cat;



function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
	cat = loadImage('../../p5_master/p5sketch_fullScreen/cat jumping.png');

}


function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();
	//fill(random(255));
	ellipse(mouseX, mouseY, 100);
}
