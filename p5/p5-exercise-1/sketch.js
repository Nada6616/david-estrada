
let uglycarX = 50;
let vroom;
let carSpeed = 3
let carAcc = .5
let raceStarted = false;


{
  function setup() {
    createCanvas(1520, 300);
    console.log("uglycarX is" + uglycarX);
    vroom = new p5.Oscillator('square');
    vroom.stop();
    vroom.amp(.05);
  }

  function draw() {
    background(100, 70, 350, 80);
    vroom.freq(uglycarX);

  //make start button
  rect(0, height - 50, 50, 50);{
    stroke(255, 204, 0);
    strokeWeight(6);
    rect(2,height - 50, 50, 50);
  }


  // check to see if mouse is pressed in box
  if (mouseIsPressed && mouseX >= 0 && mouseX <= 50 && mouseY <= height && mouseY >= height - 50) {
      raceStarted = !raceStarted;
      vroom.start();
      vroom.amp(.05);
  }



  //different ways to allow the car to move
    //uglycarX += 3;
    //uglycarX = uglycarX + 3;

  //looping mechanics
  if (raceStarted == true) {
    if (uglycarX >= 1520) {
        uglycarX = -50
        carSpeed = 3
    } else {
      carSpeed += carAcc;
      uglycarX += carSpeed;
    }

  }

  //drawing car body
    noStroke();
    fill(255, 50, 50);
    //rect(50,50, 60, 30);
    //triangle(50, 50, 110, 80, 50, 80)
    triangle(uglycarX, 50, uglycarX + 60, 80, uglycarX, 80);

  //drawing car wheels
    fill(0);
    ellipse(uglycarX, 80, 20, 20);
    ellipse(uglycarX + 50, 80, 20, 20);
}


  function mousePressed() {
  vroom.stop();
  }



}
