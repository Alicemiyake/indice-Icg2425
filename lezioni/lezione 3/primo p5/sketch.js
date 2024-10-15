let canvasXMax=400;
let canvasYMax=400;
//definisci variabili che delimitino il canva

function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220); //ogni volta che provo a disegnare va a ricreare il foglio
  //così che i numeri non si sovrappongano, cosa che accadrebbe se lascio background
  //nella funzione setup
  
}

function draw() 
{

  textSize(15);
  let strig_toprint="Contenuto mouse X="
   +mouseX+ "\ny="+mouseY;
  //"Mouse x="+mouseX
  //text(strig_toprint,20,20);
  
  //disegniamo linea orizzontale che cerchi di seguire movimento mouse nel foglio
  strokeWeight(1); 
  line(0,mouseX, canvasXMax, mouseY);
  //feedback tasto mouse sx
  //disegnare linea gialla se schiaccio mouse
  //p5--> variabile che assume valore di true (=1), se mouse schiacciato, 
  //altrimenti è false 
  if(mouseIsPressed == true) {
    if(mouseButton == RIGHT) {
      background(220);
    }
    //coloriamo di rosa
    stroke("pink");
  }else{
    stroke("black");
  }
  //altrimenti nero 
  mouseIsPressed;


}


