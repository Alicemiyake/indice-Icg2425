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



  //tetti delle case
 



  //rettangoli arancioni 

  let x_casa=0;
  for (let numero_case=0; numero_case<5)
    fill("white");
  let house_height=100;
  rect(x_casa, y-house_height, 100, house_height);
    fill("red");
    
  let passo=1
  //for(init; test; update){corpo}
  for (let i=0; i<5; i=i+passo) {
    rect (x_casa*i, y_casa+i);
  }
}
