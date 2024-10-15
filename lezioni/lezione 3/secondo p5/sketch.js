let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  //parametri: minimo, massimo, default value, step)
  slider = createSlider(0,255,0,1);
  slider.position(0, canvasYMax-60);
  slider.size(300);
}
function draw() {
  background("navy");
  frameRate(50);
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 150);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  //metodo di aggiornamento 1
  //luna si muove verso dx
  //moonXpos= moonXpos+1;
  //se la luna esce dai bordi 
  //if (moonXpos>canvasXMax){
    //moonXpos=0; //risettiamo la sua posizione inziale 
  //}

  //metodo di aggiornamento 2
  //variabile FrameCount: aggiunge 1 per ogni frame disegnato --> continua a incrementarsi
  moonXpos=frameCount % canvasXMax;
  //operatore di modulo (%): restituisce il resto della divisione intera. Aiuta a delineare dei confini 
  //1 % 400 --> 1/400=0, resto 1
  //2 % 400 --> 2/400=0, resto di 2
  //numero diviso 2 --> resto è o; numero % 2 == 0
  //numero = 400
  //numero % 2 --> 0

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill(slider.value());
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }
  //x rollover corretto su prima casetta
  x_casa=0;
  //rollover--> agisce se passiamo sopra all'elemento 
  //siamo dentro le x della casa? 
  //mouseX > x_casa
  //mouseX < x_casa+house_width
  //siamo dentro le y della casa? 
  //mouseY > left_corner
  //mouseY < left_corner+house_height
  let left_corner = y-house_height;
  let sliderValue= (60,90);

  if((mouseX > x_casa) 
    && (mouseX <x_casa + house_width)
    && (mouseY > left_corner)
    && (mouseY < left_corner+house_height)){

    fill("darkblue");
    rect(x_casa, y-house_height , house_width, house_height);

  }else{
    fill("white")
  }


  //voglio disegnare stelle random
  //numero = numero +1;
  //numero += 1;
  //numero ++; 
  let xStar =0;
  let yStar =0;
  //voglio ripetere un'azione --> for
  //for(init; condizione; update) {corpo}
  for (let nS=0; nS<5; nS++) {
     stroke (random(0,255), random(0,255), random (0,255));
     strokeWeight(random(0, 50));
     point (xStar, yStar); 
     //genera casualmente random 
     xStar=random(0, canvasXMax);
     yStar=random(0, canvasYMax/2);
  }
 
  if (frameCount==50){
    noLoop();
  }

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text (frameCount, 5, 50);
}