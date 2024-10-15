
let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
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
  fill("#000133");
  stroke("green");
  strokeWeight(0);
  rect(0,200,400,200);
  //ordine in p5
  stroke("white");
  strokeWeight(30);
  let x_Stars_prim= 10;
  let yStars_prim= 20;
  point (x_Stars_prim, yStars_prim);
  let passo=1
  //for(init; test; update){corpo}
  for (let i=0; i<50; i = i+passo) {
    // 0 --> yellow 1 --> white 2 --> yellow ... 49
    strokeWeight (i*3)
    if(i%2==0){
        //numeri pari 
        //corpo di ramo vero
        stroke("yellow");
    }else{
        //numeri dispari
        //altrimenti questo
        stroke("orange");
    }
    point (x_Stars_prim*i, yStars_prim+i);
  }
  //stella polare
  //point(xStars_primordiale+60,30);
  //aggiungiamo un'altra stella
  //point(xStars_primordiale,100);
  //point(75,100);
  //
  fill("white");
  stroke("white");
  strokeWeight(0);
  textSize(12);
  text("C'era una volta...",280,370);
}
