//riproduzione opera (usa Ps per codice colori)

function setup() {
  noLoop(); //in modo che non si muova ogni secondo (a causa della funzione draw accoppiata con random)
  createCanvas(400, 400);
}

function draw() {
  background("#3c3b4c");
  fill("lightblue");
  noStroke();

  //ricalcolo le colonne in base a qualsisi valore io metta in altezza e vGutter --> non cambia il modo in cui disegno 
  let altezza= 25; 
  let vGutter = 5;
  
  //quante colonne e righe ci sono nel mio foglio
  let columns = windowWidth/(10+5); //larghezza quadratini diviso spazio che voglio lasciare tra loro 
  let rows = windowHeight/(altezza+vGutter); 

  //prima fila di quadrati 
  for(let i = 0; i<columns; i++){

    for(let r=0; r<rows; r++){
      //facciamo che i quadratini si possono spostare e toccare ma mai sovrapporre 
      //rect (x,y,w,h) --> alla x abbiamo detto di aggiungere 15 ogni volta 
      // dobbiamo dirgli di spostarsi di 15 ma di aggiungere poi un valore random tra -2.5 e +2.5
      let xPos=i*15 + random (-2.5, 2.5);
      
      let yPos=r*(altezza+vGutter) + random (-2.5, 2.5);
      rect(xPos,yPos,10,altezza);
    }
  }

  
  
  }

  
