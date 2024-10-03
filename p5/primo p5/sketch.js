function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkblue");
  //disegno una luna
  fill("yellow");
  stroke("white");
  strokeWeight(5);
  circle(300,75,100);
  //prima della forma 
  //bisogna cambiare i parametri di fill e stroke
  fill("green");
  stroke("green");
  strokeWeight(0);
  rect(0,200,400,200);
  fill("white");
  stroke("white");
  strokeWeight(0);
  textSize(12)
  text("C'era una volta...",280,370);
}


